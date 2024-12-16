from rest_framework import generics 
from .serializers import StudentSerializer 
from .models import Student 

class StudentCreateApi(generics.CreateAPIView): 
  queryset = Student.objects.all() 
  serializer_class = StudentSerializer 

class StudentListApi(generics.ListAPIView): 
  queryset = Student.objects.all() 
  serializer_class = StudentSerializer 

class StudentUpdateApi(generics.RetrieveUpdateAPIView): 
  queryset = Student.objects.all() 
  serializer_class = StudentSerializer 

class StudentDeleteApi(generics.RetrieveDestroyAPIView): 
  queryset = Student.objects.all() 
  serializer_class = StudentSerializer 

class StudentSingleApi(generics.RetrieveAPIView): 
  queryset = Student.objects.all() 
  serializer_class = StudentSerializer