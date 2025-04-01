from django.shortcuts import render
from .models import Course
from django.db.models import Sum, Avg, Max, Min

# Create your views here.
def index(request):
    return render(request, 'onlinecourse/index.html')

# def courses(request):
#     return render(request, 'onlinecourse/courses.html')

def course_list(request):
    courses = Course.objects.order_by('name') #Ordering Courses by names
    number = Course.objects.count()
    students = Course.objects.aggregate(Sum('total_enrollment'))['total_enrollment__sum'] or 0
    average = round(Course.objects.aggregate(Avg('total_enrollment'))['total_enrollment__avg']) or 0
    maximum_students = Course.objects.aggregate(Max('total_enrollment'))['total_enrollment__max'] or 0
    minimum_students = Course.objects.aggregate(Min('total_enrollment'))['total_enrollment__min'] or 0
    
    context = {
        'courses': courses,
        'number': number,
        'students': students,
        'average': average,
        'maximum_students': maximum_students,
        'minimum_students': minimum_students,

    }
    return render(request, 'onlinecourse/courses.html', context)
    
