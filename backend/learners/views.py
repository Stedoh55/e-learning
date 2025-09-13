from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSignupSerializer
from django.contrib.auth.models import User

# Create your views here.
class SignupView(APIView):
    def get(self, request, *args, **kwargs):
        serializer=UserSignupSerializer()
        return Response(serializer.data)
    def post(self, request,*args, **kwargs):
        serializer = UserSignupSerializer(data = request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response(
                {"message": "User created successfully",
                 "username": user.username
                 },
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)

