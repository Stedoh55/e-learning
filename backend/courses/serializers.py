from rest_framework import serializers
from .models import Course
import pytz

class CourseSerializer(serializers.ModelSerializer):
    author = serializers.SerializerMethodField()
    year = serializers.SerializerMethodField()
    language = serializers.CharField(source='get_language_display', read_only=True)
    genre = serializers.CharField(source='get_genre_display', read_only=True)
    cover = serializers.SerializerMethodField()
    class Meta:
        model = Course
        fields = ["id", "name","author","cover", "genre", "language","duration", "description", "created_at","year", "updated_at"]
    
    def get_author(self, obj):
        return f"{obj.author.first_name} {obj.author.last_name}"
    
    def get_year(self, obj):
        tz = pytz.timezone('Africa/Dar_es_Salaam')
        created = obj.created_at.astimezone(tz)
        return created.year
    
    def get_cover(self, obj):
        request = self.context.get('request')
        if request and obj.cover:
            return request.build_absolute_uri(obj.cover.url)
        return obj.cover.url if obj.cover else None
    