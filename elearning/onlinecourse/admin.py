from django.contrib import admin
from .models import User,Learner, Instructor
from .models import Course,course_enrollment,Enroll_mode

# Register your models here.
class UserAdmin(admin.ModelAdmin):
    list_display = ('id','first_name','last_name', 'dob')

class InstructorAdmin(admin.ModelAdmin):
    list_display = ('user_id','occupation','social_link', )

class LearnerAdmin(admin.ModelAdmin):
    list_display = ('user_id','occupation','social_link', )

class course_enrollmentAdmin(admin.ModelAdmin):
    list_display = ('course_id','user_id','date_enrolled','mode','rating')

class course_enrollmentInline(admin.StackedInline):
    model = course_enrollment
    extra = 5

class CourseAdmin(admin.ModelAdmin):
    list_display = ('name','image','description','pub_date','total_enrollment' )
    inlines = [course_enrollmentInline]
    search_fields = ['name', 'description']                 #Adding the serach field for the specified columns
    list_filter = ['name','pub_date', 'total_enrollment']   #Adding the filtering functionality



admin.site.register(User,UserAdmin)
admin.site.register(Learner,LearnerAdmin)
admin.site.register(Instructor,InstructorAdmin)
admin.site.register(Course,CourseAdmin)
admin.site.register(course_enrollment,course_enrollmentAdmin)
admin.site.register(Enroll_mode)

