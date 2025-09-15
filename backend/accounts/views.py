from rest_framework import generics
from .models import User
from .serializers import LearnerSerializer, InstructorSerializer

# Create your views here.
class LearnerSignupView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = LearnerSerializer

class InstructorSignupView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = InstructorSerializer
