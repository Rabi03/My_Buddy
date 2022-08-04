from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from googleapiclient.discovery import build

# Create your views here.

class searchByArtist(APIView):
    def post(self,request):
        keyword=request.data['type']
        youtube=build('youtube','v3',developerKey='AIzaSyB9WDG0cjfffK-WZZE5TGimuh6L8P1leHY')
        
        response = youtube.search().list(q=keyword + "official music video",
                                        part="id,snippet",
                                        maxResults=10
                                        ).execute().get("items", [])

        

        return Response({'videos': response},status=status.HTTP_200_OK)


class searchByGenre(APIView):
    def post(self,request):
        keyword=request.data['type']
        youtube=build('youtube','v3',developerKey='AIzaSyB9WDG0cjfffK-WZZE5TGimuh6L8P1leHY')
        
        response = youtube.search().list(q=keyword + "genre music",
                                        part="id,snippet",
                                        maxResults=10
                                        ).execute().get("items", [])

    

        return Response({'videos': response},status=status.HTTP_200_OK)

class searchByTrack(APIView):
    def post(self,request):
        keyword=request.data['type']
        youtube=build('youtube','v3',developerKey='AIzaSyB9WDG0cjfffK-WZZE5TGimuh6L8P1leHY')
        
        response = youtube.search().list(q=keyword + " music video",
                                        part="id,snippet",
                                        maxResults=10
                                        ).execute().get("items", [])


        return Response({'videos': response},status=status.HTTP_200_OK)
