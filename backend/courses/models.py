from django.db import models
from accounts.models import User

# Create your models here.

class Course(models.Model):
    GENRE_CHOICES = (
        ('technology', 'Technology'),
        ('economics', 'Economics'),
        ('politics', 'Politics'),
        ('leadership', 'Leadership'),
        ('health', 'Public Health'),
    )
    LANGUAGE_CHOICES = (
        ('en', 'English'),
        ('sw', 'Swahili'),
        ('fr', 'French'),
    )

    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="Author", null=True)
    name = models.CharField(max_length=255)
    description = models.TextField()
    cover = models.ImageField(upload_to='courses/covers/', null=True) #Upload to the Course Covers directory
    genre = models.CharField(max_length=20, choices=GENRE_CHOICES, default="technology")
    language = models.CharField(max_length=20, choices=LANGUAGE_CHOICES, default="en")
    duration = models.IntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Content(models.Model):
    CONTENT_TYPES = [
        ('video', 'Video'),
        ('text','Text'),
    ]

    course = models.ForeignKey(Course, related_name='contents', on_delete=models.CASCADE)
    order = models.PositiveBigIntegerField(default=0)
    week = models.PositiveBigIntegerField(default=1)
    content_type = models.CharField(max_length=10, choices=CONTENT_TYPES)
    title = models.CharField(max_length=255, blank=True)
    
    # Common fields
    duration = models.DurationField(blank=True, null=True) 
    video_file = models.FileField(blank=True, null=True, upload_to="courses/contents/")
    text_body = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.title}"
    