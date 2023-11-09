from django.db import models

class Influencer(models.Model):
    channel_id = models.CharField(max_length=255, unique=True)
    title = models.CharField(max_length=255)
    subscribers = models.IntegerField()
    views = models.IntegerField()  # 조회수
    average_views = models.IntegerField(blank=True, null=True)  # 평균 조회수
    description = models.TextField(blank=True, null=True)
    profile_image_url = models.URLField(max_length=1024, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)  # 생성 시간 자동 저장

    def __str__(self):
        return self.title
