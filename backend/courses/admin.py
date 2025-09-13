from django.contrib import admin
from .models import Course

# Register your models here.
class CourseAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "description", "created_at", "updated_at")
    

admin.site.register(Course,CourseAdmin)