from django.conf.urls import url, include
from django.contrib import admin
from api.views import GalleryViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'gallery-view', GalleryViewSet)

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^v1/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
