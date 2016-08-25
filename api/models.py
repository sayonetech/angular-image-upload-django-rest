from __future__ import unicode_literals

from django.db import models
from django.utils.translation import ugettext as _

# Create your models here.


# model to save the uploaded images
class Gallery(models.Model):
    image = models.ImageField(_('Image'), upload_to='gallery/', null=True, blank=True)

    def __str__(self):
        return 'image'

    class Meta:
        verbose_name = 'Gallery'
        verbose_name_plural = 'Galleries'
