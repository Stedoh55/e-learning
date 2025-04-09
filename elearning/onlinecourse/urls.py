from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='homepage'),
    path('courses/', views.course_list, name='courses'),
    path('courses/<int:pk>', views.CourseView.as_view(), name='courses-detail'),
    path('courses/management', views.course_management, name='course_management'),
    path('login/', views.login_request, name='login'),
    path('dashboard', views.dashboard, name='dashboard'),
    path('logout', views.logout_request, name='logout'),
    path('signup', views.signup_request, name='signup'),
    path('learners', views.learners_manager, name='learners'),
    path('learners/<int:pk>', views.LearnersInfo.as_view(), name='learners_details'),
    path('learners/<int:learner_id>/edit', views.LearnersUpdate, name='learners_update'),
    path('learners/<int:learner_id>/delete', views.LearnersDelete, name='learners_delete'),
]

