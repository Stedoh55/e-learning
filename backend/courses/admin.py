from django.contrib import admin
from .models import Course, CourseDemo

# Register your models here.
class CourseAdmin(admin.ModelAdmin):
    list_display = ("id", "name","author","genre","language", "description", "created_at", "updated_at","cover")
    
class CourseDemoAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "details","cover", "created_at")

admin.site.register(Course,CourseAdmin)
admin.site.register(CourseDemo,CourseDemoAdmin)