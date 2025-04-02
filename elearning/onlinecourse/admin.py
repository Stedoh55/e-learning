from django.contrib import admin
from django.utils.html import format_html
from .models import CustomUser,Learner, Instructor
from .models import Course,course_enrollment,Enroll_mode

# Register your models here.
class CustomUserAdmin(admin.ModelAdmin):
   
    search_fields = ("email",'first_name','last_name')
    ordering = ("-is_staff","first_name")
    list_display = ('id','username', 'first_name','last_name','email','is_staff','is_active', 'dob')

class InstructorAdmin(admin.ModelAdmin):
    list_display = ('user_id','occupation','social_link', )

class LearnerAdmin(admin.ModelAdmin):
    list_display = ('user_id','occupation','social_link', )

class course_enrollmentAdmin(admin.ModelAdmin):
    list_display = ('course_id','user_id','date_enrolled','mode','rating')

class course_enrollmentInline(admin.StackedInline):
    model = course_enrollment
    extra = 1

class CourseAdmin(admin.ModelAdmin):
    list_display = ('name','image','description','pub_date','total_enrollment' )
    inlines = [course_enrollmentInline]
    search_fields = ['name', 'description']                 #Adding the serach field for the specified columns
    # list_filter = ['name','pub_date', 'total_enrollment']   #Adding the filtering functionality

    #Previewing the Uploaded image
    def image_preview(self,obj):
        if obj.image:
            return format_html('<img src="{}" width="100" height="auto" style="border-radius: 5px;" />', obj.image.url)
        return "(No Image)"
    
    image_preview.short_description = "Preview"



admin.site.register(CustomUser,CustomUserAdmin)
admin.site.register(Learner,LearnerAdmin)
admin.site.register(Instructor,InstructorAdmin)
admin.site.register(Course,CourseAdmin)
admin.site.register(course_enrollment,course_enrollmentAdmin)
admin.site.register(Enroll_mode)


