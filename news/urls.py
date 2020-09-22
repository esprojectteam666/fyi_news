from django.urls import path
from . import views, trending_crud

urlpatterns = [
    path('websites/', views.listwebsites),

    path('websites/trending/', trending_crud.dispatcher),
]
