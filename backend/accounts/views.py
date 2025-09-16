from rest_framework import generics,status
from rest_framework.response import Response
from .models import User
from .serializers import LearnerSerializer, InstructorSerializer, LoginSerializer

# Create your views here.
class LearnerSignupView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = LearnerSerializer

class InstructorSignupView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = InstructorSerializer

class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request,*args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.validated_data, status=status.HTTP_200_OK)