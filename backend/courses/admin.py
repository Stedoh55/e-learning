from django.contrib import admin
from .models import Course, Content

# Register your models here.
class CourseAdmin(admin.ModelAdmin):
    list_display = ("id", "name","author","genre","language", "description", "created_at", "updated_at","cover")
    
class ContentAdmin(admin.ModelAdmin):
    list_display = ("course", "week","order", "content_type","title", "duration", "video_file","text_body","created_at") 

admin.site.register(Course,CourseAdmin)
admin.site.register(Content, ContentAdmin)