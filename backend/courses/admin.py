from django.contrib import admin
from .models import Course

# Register your models here.
class CourseAdmin(admin.ModelAdmin):
    list_display = ("id", "name","author","genre","language", "description", "created_at", "updated_at")
    

admin.site.register(Course,CourseAdmin)