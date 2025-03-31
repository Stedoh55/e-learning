from django.shortcuts import render
from .models import Course

# Create your views here.
def index(request):
    return render(request, 'onlinecourse/index.html')

# def courses(request):
#     return render(request, 'onlinecourse/courses.html')

def course_list(request):
    courses = Course.objects.all()
    context = {
        'courses': courses
    }
    return render(request, 'onlinecourse/courses.html', context)
    
