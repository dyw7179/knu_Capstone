"""
URL configuration for fitdb project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include 
from django.views.generic import TemplateView#리액트 연동을 위해 추가
from ai_app import views

urlpatterns = [
    path("admin/", admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),#리액트 연동을 위해 추가
    path('video_search_app/', include('video_search_app.urls')), #영상추천앱
    path('infl_app/', include('infl_app.urls')),
    path('api/gpt', views.gpt_endpoint, name='gpt_endpoint'),
]
