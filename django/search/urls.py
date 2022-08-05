from django.contrib import admin
from django.urls import path,include

from .views import SearchAPI

urlpatterns = [
    path('', SearchAPI.as_view()),
]