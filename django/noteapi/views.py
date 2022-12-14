from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated

from .serializers import NoteSerializer

from .models import Note

# Create your views here.

class NoteViewSet(ModelViewSet):
    serializer_class=NoteSerializer
    queryset=Note.objects.all()
    def get_permissions(self):
        if self.request.method in ['POST', 'PUT','PATCH', 'DELETE']:
            return [IsAuthenticated()]
        return []

