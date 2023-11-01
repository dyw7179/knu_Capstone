from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from googleapiclient.errors import HttpError
from googleapiclient.discovery import build
import requests
from transformers import AutoModelForSequenceClassification, AutoTokenizer, pipeline


class GetRelevantVideos(View):

    def get(self, request, *args, **kwargs):

        # YouTube API에 필요한 정보와 설정
        DEVELOPER_KEY = "AIzaSyBEKVaHpIt3Ozns7EFeG131aTKhrMF393g"
        YOUTUBE_API_SERVICE_NAME = "youtube"
        YOUTUBE_API_VERSION = "v3"

        query = request.GET.get('query', '벤치프레스')  # 기본값은 '벤치프레스'

        # 감성 분석 모델 및 파이프라인 초기화
        MODEL_NAME = "beomi/KcELECTRA-base"
        tokenizer = AutoTokenizer.from_pretrained("beomi/KcELECTRA-base")
        model = AutoModelForSequenceClassification.from_pretrained("beomi/KcELECTRA-base")
        sentiment_pipeline = pipeline("sentiment-analysis", model=model, tokenizer=tokenizer)

        youtube = build(YOUTUBE_API_SERVICE_NAME, YOUTUBE_API_VERSION, developerKey=DEVELOPER_KEY)

        search_response = youtube.search().list(
            q=query,
            order="relevance",
            part="snippet",
            maxResults=20,
            type="video",
        ).execute()

        def is_short(vid):
            url = "https://www.youtube.com/shorts/" + vid
            ret = requests.head(url)
            if ret.status_code == 200:
                return True
            else:
                return False

        def analyze_sentiment(comments):
            results = []
            for comment, _ in comments:
                result = sentiment_pipeline(comment, truncation=True, max_length=300)
                results.append(result)
            
            positive_scores = []
            for result in results:
                label = result[0]["label"]
                score = result[0]["score"]
                if label == "LABEL_1":
                    positive_scores.append(score)
                elif label == "LABEL_0":
                    positive_scores.append(1 - score)
            
            if positive_scores:
                return sum(positive_scores) / len(positive_scores)
            else:
                return None

        videos = []

        for item in search_response["items"]:
            video_id = item["id"]["videoId"]

            if is_short(video_id):
                continue

            video_title = item["snippet"]["title"]
            video_description = item["snippet"]["description"]
            video_channel_id = item["snippet"]["channelId"]
            video_channel_title = item["snippet"]["channelTitle"]
            video_published_at = item["snippet"]["publishedAt"]

            video_response = youtube.videos().list(id=video_id, part="statistics, contentDetails").execute()
            video_resource = video_response["items"][0]
            channel_response = youtube.channels().list(id=video_channel_id, part="statistics").execute()
            channel_resource = channel_response["items"][0]

            duration = video_resource["contentDetails"]["duration"]
            like_count = int(video_resource["statistics"].get("likeCount", 0))
            view_count = int(video_resource["statistics"].get("viewCount", 0))
            subscriber_count = int(channel_resource["statistics"]["subscriberCount"])

            comments = []
            try:
                comment_response = youtube.commentThreads().list(
                    part="snippet",
                    videoId=video_id,
                    maxResults=50,
                    order="relevance",
                    textFormat="plainText",
                ).execute()

                for comment_item in comment_response["items"]:
                    comment_text = comment_item["snippet"]["topLevelComment"]["snippet"]["textDisplay"]
                    comment_likes = comment_item["snippet"]["topLevelComment"]["snippet"]["likeCount"]
                    comments.append((comment_text, comment_likes))

            except HttpError as e:
                print(f"An error occurred: {e}")
                comments = []

            sorted_comments = sorted(comments, key=lambda x: x[1], reverse=True)[:10]
            average_positive_score = analyze_sentiment(sorted_comments)

            video_info = {
                "id": video_id,
                "title": video_title,
                "like_count": like_count,
                "view_count": view_count,
                "subscriber_count": subscriber_count,
                "average_positive_score": average_positive_score,
            }
            videos.append(video_info)

        weights = {
            "like_count": 0.5,
            "view_count": 0.6,
            "subscriber_count": 0.4,
            "average_positive_score": 0.5  # 가중치 값을 설정해주세요.
        }

        scores = {}

        max_values = {
            "like_count": max((video["like_count"] for video in videos), default=0),
            "view_count": max((video["view_count"] for video in videos), default=0),
            "subscriber_count": max((video["subscriber_count"] for video in videos), default=0),
            "average_positive_score": max((video["average_positive_score"] for video in videos if video["average_positive_score"] is not None), default=0)
        }


        for video in videos:
            video_score = (
                weights["like_count"] * video["like_count"] / max_values["like_count"]
                + weights["view_count"] * video["view_count"] / max_values["view_count"]
                + weights["subscriber_count"] * video["subscriber_count"] / max_values["subscriber_count"]
            )
            
            if video["average_positive_score"] is not None:
                video_score += weights["average_positive_score"] * video["average_positive_score"] / max_values["average_positive_score"]
            scores[video["id"]] = video_score

        sorted_videos = sorted(scores.items(), key=lambda x: x[1], reverse=True)
        sorted_video_ids = [video_id for video_id, _ in sorted_videos]
        for video_id in sorted_video_ids:
            print(video_id)
        # 마지막에 video_id 배열을 JSON 형태로 반환
        return JsonResponse({"video_ids": sorted_video_ids})