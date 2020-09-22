from django.db import models
import datetime
# Create your models here.


class Trending_news(models.Model):
    title = models.CharField(max_length=100)

    trending_link = models.CharField(max_length=200)

    update_time = models.DateTimeField(default=datetime.datetime.now)


class Website(models.Model):
    name = models.CharField(max_length=100)

    portal_link = models.CharField(max_length=200)

    trending_news = models.ForeignKey(Trending_news, on_delete=models.PROTECT)
