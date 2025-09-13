from rest_framework import serializers
from django.contrib.auth.models import User
from .models import LearnerProfile

class UserSignupSerializer(serializers.ModelSerializer):
    bio = serializers.CharField(required=False, allow_blank=True)
    date_of_birth = serializers.DateTimeField(required=False)

    class Meta:
        model = User
        fields = ["username", "email", "password", "bio", "date_of_birth"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        bio = validated_data.pop("bio", "")
        date_of_birth = validated_data.pop("date_of_birth", None)

        user = User.objects.create_user(
            username=validated_data["username"],
            email=validated_data.get("email"),
            password=validated_data["password"]
        )

        return user