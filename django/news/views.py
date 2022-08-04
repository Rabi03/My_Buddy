from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
import geocoder	
from geopy.geocoders import Nominatim
from newsapi import NewsApiClient

newsapi = NewsApiClient(api_key='f4366041df3a47f192965fcab68157a9')
# Create your views here.

class getLetestNews(APIView):
    def get(self,request):
        g = geocoder.ip('me')
        geolocator = Nominatim(user_agent="geoapiExercises")
        location = geolocator.reverse(str(g.latlng[0])+','+str(g.latlng[1]),language='en')
        address = location.raw['address']
        print(address)
        top_headlines  = newsapi.get_everything(
                                      sources='bbc-news,the-verge',
                                      domains='bbc.co.uk,techcrunch.com',
                                      language='en',
                                      sort_by='relevancy',
                                      page=2)
        return Response(top_headlines)


