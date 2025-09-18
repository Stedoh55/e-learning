from rest_framework import generics,status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from .models import User
from .serializers import LearnerSerializer, InstructorSerializer, LoginSerializer, UserSerializer

# Create your views here.
# The Signup Views for the Learners and Instructors
class LearnerSignupView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = LearnerSerializer

class InstructorSignupView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = InstructorSerializer

# The Login view for Users
class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request,*args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.validated_data, status=status.HTTP_200_OK)

# Retrieving the Details of Authenticated user from their Tokens
class CurrentUserView(APIView):
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)