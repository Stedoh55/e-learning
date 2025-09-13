from django.contrib import admin
from .models import LearnerProfile

# Register your models here.
class LearnerProfileAdmin(admin.ModelAdmin):
    list_display = ["id", "user", "bio", "date_of_birth"]

admin.site.register(LearnerProfile, LearnerProfileAdmin)

