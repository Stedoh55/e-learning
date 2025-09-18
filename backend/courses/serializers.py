from rest_framework import serializers
from .models import Course
import pytz

class CourseSerializer(serializers.ModelSerializer):
    author = serializers.SerializerMethodField()
    year = serializers.SerializerMethodField()
    language = serializers.CharField(source='get_language_display', read_only=True)
    genre = serializers.CharField(source='get_genre_display', read_only=True)
    class Meta:
        model = Course
        fields = ["id", "name","author", "genre", "language","duration", "description", "created_at","year", "updated_at"]
    
    def get_author(self, obj):
        return f"{obj.author.first_name} {obj.author.last_name}"
    
    def get_year(self, obj):
        tz = pytz.timezone('Africa/Dar_es_Salaam')
        created = obj.created_at.astimezone(tz)
        return created.year