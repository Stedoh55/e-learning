from rest_framework import serializers
from .models import User
from django.contrib.auth import authenticate, get_user_model
from rest_framework_simplejwt.tokens import RefreshToken

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name','username', 'email', 'password', 'date_of_birth', 'bio', 'role']

    def create(self, validated_data):
        password = validated_data.pop("password")
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user

class LearnerSerializer(UserSerializer):
    def create(self, validated_data):
        validated_data['role'] = 'learner'
        return super().create(validated_data)
    
class InstructorSerializer(UserSerializer):
    def create(self, validated_data):
        validated_data['role'] = 'instructor'
        return super().create(validated_data)

class LoginSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['username', 'password']
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        username = data.get("username")
        password = data.get("password")

        user = authenticate(username=username, password=password)

        if not user:
            raise serializers.ValidationError("Invalid credentials")
        
        refresh = RefreshToken.for_user(user)
        return {
            "refresh": str(refresh),
            "access": str(refresh.access_token),
            "role": user.role,
            "user": {
                "id": user.id,
                "username": user.username,
                "email": user.email
            }
        }