from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
import requests

# Create your views here.

class SearchAPI(APIView):
    def post(self,request):
        keyword=request.data['keyword']
        url=f'https://google-search3.p.rapidapi.com/api/v1/search/q={keyword}&num=20'
        headers = {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "US",
        "X-RapidAPI-Key": "58a5bf341bmsh49fe6eee482949cp162b1fjsn82358d56a855",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com"
        }

        response = requests.request("GET", url, headers=headers)

        return Response(response.json())
        
