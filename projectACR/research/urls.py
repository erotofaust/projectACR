from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('main/', views.index),
    path('ranking/', views.ranking),
    path('vote/', views.vote),
]