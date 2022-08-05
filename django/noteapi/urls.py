from django.contrib import admin
from rest_framework_nested import routers
from . import views

router=routers.DefaultRouter()

router.register('notes',views.NoteViewSet,basename='notes')


urlpatterns = router.urls