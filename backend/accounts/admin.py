from django.contrib import admin
from .models import User

# Register your models here.
class UserAdmin(admin.ModelAdmin):
    list_display = ["id", "username","role", "first_name", "last_name", "email", "bio", "date_of_birth", "is_staff"]

admin.site.register(User, UserAdmin)