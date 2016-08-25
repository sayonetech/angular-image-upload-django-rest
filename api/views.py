from rest_framework.viewsets import ModelViewSet
from .serializers import GallerySerializer
from .models import Gallery
from rest_framework import permissions


class GalleryViewSet(ModelViewSet):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer
    permission_classes = [permissions.AllowAny]
    http_method_names = ['get', 'post', ]
