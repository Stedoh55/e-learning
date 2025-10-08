from django.urls import path
from .views import AllCourses,CourseDetailView,ContentListCreateView,ContentDetailView

urlpatterns = [
    path("courses", AllCourses.as_view(), name="All courses"),
    path("courses/<int:pk>", CourseDetailView.as_view(), name="Single Courses"),
    path("courses/<int:course_id>/contents", ContentListCreateView.as_view(), name="Contents list create"),
    path("contents/<int:pk>", ContentDetailView.as_view(), name='content-detail')
]
