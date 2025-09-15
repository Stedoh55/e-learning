from django.urls import path
from .views import LearnerSignupView, InstructorSignupView

urlpatterns = [
    path("instructors/signup", InstructorSignupView.as_view(), name="Instructor signup"),
    path("learners/signup", LearnerSignupView.as_view(), name="Learner signup"),
]
