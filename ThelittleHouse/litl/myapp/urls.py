from django.urls import path
from . import views

urlpatterns=[
    path('',views.index, name='index'),
    path('about/', views.about, name='about'),
    path('History/', views.History, name='History'),
    path('gallery/', views.gallery, name='gallery'),
    path('donate/', views.donate, name='donate')
]