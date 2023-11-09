# infl_app/urls.py
from django.urls import path
from .views import top_influencers

urlpatterns = [
    path('top/', top_influencers, name='top-influencers'),
]
