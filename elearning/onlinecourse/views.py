from django.shortcuts import render,redirect
from django.views import generic
from .models import Course
from django.db.models import Sum, Avg, Max, Min
from django.contrib.auth import authenticate,login,logout
from django.contrib import messages
from .forms import SignupForm

# Create your views here.
def index(request):
    return render(request, 'onlinecourse/index.html')

# def courses(request):
#     return render(request, 'onlinecourse/courses.html')

def course_list(request):
    courses = Course.objects.order_by('name') #Ordering Courses by names
    number = Course.objects.count()
    students = Course.objects.aggregate(Sum('total_enrollment'))['total_enrollment__sum'] or 0
    average = Course.objects.aggregate(Avg('total_enrollment'))['total_enrollment__avg'] or 0
    if average > 0:
        average = round(average)
   
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

# Using Generic Views for easy request calls        (3 Steps)
class CourseView(generic.DetailView):               #1: Extends detailview
    model = Course                                  #2: Define model
    template_name = 'onlinecourse/course_detail.html'     #3: Define template
    context_object_name = 'course'
    
def login_request(request):
    if request.method == 'POST':
        # Get username and password from login form
        username = request.POST['username']
        password = request.POST['psw']

        #Authenticate user
        user = authenticate(request, username=username, password=password)

        #Login user
        if user is not None:
            login(request,user)
            messages.success(request, "Login successful!")
            return redirect('dashboard')
        else:
            messages.error(request, "Invalid username or password.")
    return render(request, 'onlinecourse/login.html')

def dashboard(request):
    return render(request, 'onlinecourse/dashboard.html')

def logout_request(request):
    logout(request)
    messages.success(request, "You have successful logged out!")
    return redirect('homepage')

def signup_request(request):
    if request.method == "POST":
        form = SignupForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.email = form.cleaned_data["email"]
            user.first_name = form.cleaned_data["first_name"]
            user.last_name = form.cleaned_data["last_name"]
            user.dob = form.cleaned_data["dob"]
            user.save()         #Save user instance
            messages.success(request, "Signup successful!")
            return redirect("login")
    else:
        form = SignupForm()
    return render(request, "onlinecourse/signup.html", {"form":form})