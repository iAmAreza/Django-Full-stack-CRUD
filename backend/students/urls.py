from django.urls import path 
from .api import StudentCreateApi, StudentDeleteApi, StudentUpdateApi, StudentListApi, StudentSingleApi

urlpatterns = [
  path('api/',StudentListApi.as_view()),
  path('api/create/', StudentCreateApi.as_view()), 
  path('api/delete/<int:pk>', StudentDeleteApi.as_view()), 
  path('api/update/<int:pk>', StudentUpdateApi.as_view()), 
  path('api/student/<int:pk>',StudentSingleApi.as_view()), 
]