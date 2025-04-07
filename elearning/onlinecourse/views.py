from django.shortcuts import render,redirect
from django.http import HttpResponseRedirect
from django.views import generic
from .models import Course, CustomUser, Dashboard_Update
from django.db.models import Sum, Avg, Max, Min
from django.contrib.auth import authenticate,login,logout
from django.contrib import messages
from .forms import SignupForm
from django.db.models import Q
from django.contrib.auth.decorators import login_required
from datetime import datetime
from django.utils import timezone


# Create your views here.
def index(request):
    context = {
        "background_image_path" : "images/home-background.jpeg"
    }
    return render(request, 'onlinecourse/pages/index.html', context)

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
    return render(request, 'onlinecourse/pages/courses.html', context)

# Using Generic Views for easy request calls        (3 Steps)
class CourseView(generic.DetailView):               #1: Extends detailview
    model = Course                                  #2: Define model
    template_name = 'onlinecourse/pages/course_detail.html'     #3: Define template
    context_object_name = 'course'
    
def login_request(request):
    if request.method == 'POST':
        # Get username and password from login form
        username = request.POST['username']
        password = request.POST['psw']

        #Authenticate user
        user = authenticate(request, username=username, password=password)

        #Check for Login Credentials
        if user is not None:
            messages.success(request, "Login successful!")
            login(request,user)
            next_url = request.POST.get('next') or request.GET.get('next')
            return redirect(next_url or '../dashboard')
           
        else:
            return render(request, 'onlinecourse/pages/login.html',{"error_message": "Incorrect Username or Password."})
          
    return render(request, 'onlinecourse/pages/login.html')

@login_required
def dashboard(request):
    # notification = updates.objects.order_by('create_time')
    current_time = timezone.now()
    valid_time = Dashboard_Update.objects.filter(end_time__gt=current_time)
    update = valid_time.filter(visibility=True)
    context = {
        "update" : update,
        
    }
    return render(request, 'onlinecourse/pages/dashboard.html', context)

def logout_request(request):
    logout(request)
    messages.success(request, "You have successful logged out!")
    return redirect('homepage')

# def signup_request(request):
#     if request.method == "POST":
#         form = SignupForm(request.POST)
#         if form.is_valid():
#             user = form.save(commit=False)
#             user.email = form.cleaned_data["email"]
#             user.first_name = form.cleaned_data["first_name"]
#             user.last_name = form.cleaned_data["last_name"]
#             user.dob = form.cleaned_data["dob"]
#             user.save()         #Save user instance
#             messages.success(request, "Signup successful!")
#             return HttpResponseRedirect("login")
#     else:
#         form = SignupForm()
#     return render(request, "onlinecourse/pages/signup.html", {"form":form})

def signup_request(request):
    if request.method == "POST":
        first_name = request.POST.get("first_name")
        last_name = request.POST.get("last_name")
        email = request.POST.get("email")
        username = request.POST.get("username")
        dob = request.POST.get("dob")
        password1 = request.POST.get("password1")
        password2 = request.POST.get("password2")

        #Basic Input Validation
        if password1 != password2:
            return render(request, 'onlinecourse/pages/signup.html', {"error_message": "Passwords do not match!"})
        if CustomUser.objects.filter(username=username).exists():
            return render(request, 'onlinecourse/pages/signup.html', {"error_message": "Username already taken!"})
        if CustomUser.objects.filter(email=email).exists():
            return render(request, 'onlinecourse/pages/signup.html', {"error_message": "User exists! Please Login"})

        #Create user
        user = CustomUser.objects.create_user(username=username, email=email, password=password1)
        user.first_name = first_name
        user.last_name = last_name
        user.dob = dob
        user.save()

        #Return Success and Redirect the user
        messages.success(request, "Signup successful!")
        return redirect('login')
    return render(request,'onlinecourse/pages/signup.html' )

@login_required
def course_management(request):
    return render(request, 'onlinecourse/pages/course_management.html')

# Retrieve the list of learners in a system
@login_required
def learners_manager(request):
    learners = CustomUser.objects.filter(is_staff=False)
    # learners = learners.order_by('first_name')
    results_count = 0
    query = request.GET.get('q')
    if query:
        results = learners.filter(
            Q(first_name__icontains=query) |
            Q(last_name__icontains=query) |
            Q(email__icontains=query)
        )
        results_count = results.count()
    else:
        results = learners
        results_count = results.count()
    context = {
        'learners': results,
        'query': query,
        'results_count': results_count
    }
    return render(request, 'onlinecourse/pages/learners.html', context)
