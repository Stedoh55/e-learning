from django.urls import path
from .views import LearnerSignupView, InstructorSignupView, LoginView, CurrentUserView

urlpatterns = [
    path("instructors/signup", InstructorSignupView.as_view(), name="Instructor signup"),
    path("learners/signup", LearnerSignupView.as_view(), name="Learner signup"),
    path("login", LoginView.as_view(), name="Login"),
    path("profile", CurrentUserView.as_view(), name="Learner profile")
]
