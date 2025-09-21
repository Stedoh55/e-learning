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
    cover = models.ImageField(upload_to='courses/covers/', null=True)
    genre = models.CharField(max_length=20, choices=GENRE_CHOICES, default="technology")
    language = models.CharField(max_length=20, choices=LANGUAGE_CHOICES, default="en")
    duration = models.IntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

# Demo Courses Comprising the file uploads (Cover Image)
class CourseDemo(models.Model):
    name = models.CharField(max_length=50)
    details = models.TextField()
    cover = models.ImageField(upload_to='courses/covers/') #Upload to the Course Covers directory
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name