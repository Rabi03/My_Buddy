from django.contrib import admin
from django.urls import path,include

from .views import getLetestNews

urlpatterns = [
    path('letest-news/', getLetestNews.as_view()),
]