from django.contrib import admin

# Register your models here.
from .models import Trending_news
from .models import Website

admin.site.register(Trending_news)
admin.site.register(Website)
