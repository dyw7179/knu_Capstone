# infl_app/management/commands/collect_infl.py

from django.core.management.base import BaseCommand
from django.db.utils import IntegrityError
from infl_app.models import Influencer
import googleapiclient.discovery
import googleapiclient.errors
from datetime import datetime

class Command(BaseCommand):
    help = 'Collects influencers data from YouTube API'

    def handle(self, *args, **options):
        
        Influencer.objects.all().delete()
        self.stdout.write(self.style.SUCCESS('All existing data has been deleted.'))

        API_KEY = "AIzaSyBEKVaHpIt3Ozns7EFeG131aTKhrMF393g"  # Replace with your actual API key
        YOUTUBE_API_SERVICE_NAME = "youtube"
        YOUTUBE_API_VERSION = "v3"

        youtube = googleapiclient.discovery.build(
            YOUTUBE_API_SERVICE_NAME, YOUTUBE_API_VERSION, developerKey=API_KEY
        )

        search_keywords = ["보디빌딩", "스쿼트", "벤치프레스","헬창의", "아놀드 프레스", "벤트오버레터럴레이즈","데드리프트","파워리프팅", "피지컬", "핏블리",
                   "숄더패킹", "바벨로우", "랫풀다운", "덤벨프레스", "벌크업", "상완골전방활주",]


        unique_channels = set()

        # 채널 검색 및 데이터 수집
        for keyword in search_keywords:
            search_response = youtube.search().list(
                q=keyword,
                type="channel",
                part="id,snippet",
                maxResults=10
            ).execute()

            for item in search_response["items"]:
                channel_id = item["id"]["channelId"]

                if channel_id not in unique_channels:
                    unique_channels.add(channel_id)

                    channel_response = youtube.channels().list(
                        part="snippet,statistics",
                        id=channel_id
                    ).execute()

                    if channel_response["items"]:
                        snippet = channel_response["items"][0]["snippet"]
                        statistics = channel_response["items"][0]["statistics"]

                        title = snippet["title"]
                        description = snippet.get("description", "")
                        profile_image_url = snippet["thumbnails"]["high"]["url"]
                        subscribers = int(statistics.get("subscriberCount", 0))
                        total_views = int(statistics.get("viewCount", 0))
                        total_videos = int(statistics.get("videoCount", 0))
                        average_views = total_views / total_videos if total_videos else 0

                        # 채널 생성일 변환
                        channel_created_at_raw = snippet["publishedAt"]
                        # 밀리초가 포함되어 있는지 확인
                        if '.' in channel_created_at_raw:
                            format_str = "%Y-%m-%dT%H:%M:%S.%fZ"
                        else:
                            format_str = "%Y-%m-%dT%H:%M:%SZ"

                        channel_created_at = datetime.strptime(channel_created_at_raw, format_str).date()                        # 모델 인스턴스를 생성하고 데이터를 저장
                        try:
                            Influencer.objects.create(
                                channel_id=channel_id,
                                title=title,
                                description=description,
                                profile_image_url=profile_image_url,
                                subscribers=subscribers,
                                views=total_views,
                                average_views=average_views,
                                channel_created_at=channel_created_at,  # 채널 생성일 저장
                            )
                            self.stdout.write(self.style.SUCCESS(f'Successfully added channel "{title}"'))
                        except IntegrityError:
                            self.stdout.write(self.style.WARNING(f'Channel "{title}" already exists in the database'))
