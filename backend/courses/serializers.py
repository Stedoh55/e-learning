from rest_framework import serializers
from .models import Course, Content
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
    
class ContentSerializer(serializers.ModelSerializer):
    video_file = serializers.SerializerMethodField()

    class Meta:
        model = Content
        fields = [
            'id', 'content_type', 'title', 'text_body', 'video_file', 'duration', 'order', 'week'
        ]
        extra_kwargs = {
            'video_file': {'required': False, 'allow_null':True}
        }
    
    # Build the Absolute links for the video files
    def get_video_file(self, obj):
        request = self.context.get('request')
        if request and obj.video_file:
            return request.build_absolute_uri(obj.video_file.url)
        return obj.video_file.url if obj.video_file else None
    
    #Validate the Uploaded media file for the Supported Format
    def validate_video_file(self, value):
        if value and not value.name.lower().endswith(('.mp4', '.mov', '.mkv')):
            raise serializers.ValidationError("Unsuported video format.")
        return value 
