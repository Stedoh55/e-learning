from django.shortcuts import render,redirect
from django.http import HttpResponseRedirect
from django.views import generic
from .models import Course
from django.db.models import Sum, Avg, Max, Min
from django.contrib.auth import authenticate,login,logout
from django.contrib import messages
from .forms import SignupForm
from .models import CustomUser


# Create your views here.
def index(request):
    return render(request, 'onlinecourse/pages/index.html')

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
            return redirect('dashboard')
           
        else:
            return render(request, 'onlinecourse/pages/login.html',{"error_message": "Incorrect Username or Password."})
          
    return render(request, 'onlinecourse/pages/login.html')

def dashboard(request):
    return render(request, 'onlinecourse/pages/dashboard.html')

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
            return render(request, 'onlinecourse/pages/signup.html', {"signup_error_message": "Passwords do not match!"})
        if CustomUser.objects.filter(username=username).exists():
            return render(request, 'onlinecourse/pages/signup.html', {"signup_error_message": "Username already taken!"})
        if CustomUser.objects.filter(email=email).exists():
            return render(request, 'onlinecourse/pages/signup.html', {"signup_error_message": "User exists! Please Login"})

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

def course_management(request):
    return render(request, 'onlinecourse/pages/course_management.html')
