from django.contrib import admin
from django.urls import path,include

from .views import searchByArtist, searchByGenre, searchByTrack

urlpatterns = [
    path('artist/', searchByArtist.as_view()),
    path('genre/', searchByGenre.as_view()),
    path('track/', searchByTrack.as_view()),

]