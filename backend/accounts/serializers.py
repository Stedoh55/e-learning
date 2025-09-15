from rest_framework import serializers
from .models import User

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