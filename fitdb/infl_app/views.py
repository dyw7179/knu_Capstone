from django.http import JsonResponse
from django.db.models import F
from .models import Influencer

def top_influencers(request):
    # 구독자 수와 평균 조회수가 높은 상위 10명의 유튜버를 추립니다.
    influencers = Influencer.objects.annotate(
        rank=F('subscribers') + F('average_views')
    ).order_by('-rank')[:10]  # 내림차순 정렬 후 상위 10개만 선택

    # 필요한 정보만 JSON으로 변환하여 리턴합니다.
    data = list(influencers.values(
        'channel_id', 'profile_image_url', 'title', 'subscribers', 'views', 'average_views', 'channel_created_at', 
    ))
    return JsonResponse(data, safe=False)
