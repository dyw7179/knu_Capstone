from django.urls import path
from . import views

urlpatterns = [
    path('search/', views.GetRelevantVideos.as_view(), name='video_search'),
]
