from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='homepage'),
    path('courses/', views.course_list, name='courses'),
]
