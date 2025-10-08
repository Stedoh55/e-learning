from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from .models import Course, Content
from .serializers import CourseSerializer, ContentSerializer

# Create your views here.
class AllCourses(APIView):
    def get(self, request, *args, **kwargs):
        courses = Course.objects.all()
        serializer = CourseSerializer(courses, many=True, context={"request": request})  #Context return the absolute url for images
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = CourseSerializer(data=request.data, context={"request": request})   #Context for handling the absolute url
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

class CourseDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    
# Retrieving the Contents for the course
class ContentListCreateView(generics.ListCreateAPIView):
    serializer_class = ContentSerializer

    def get_queryset(self):
        """Return all contents for a specific course"""
        course_id = self.kwargs['course_id']
        return Content.objects.filter(course_id=course_id).order_by('order')
    
    def perform_create(self, serializer):
        """Attach the contents to the correct course on creation"""
        course_id = self.kwargs['course_id']
        serializer.save(course_id=course_id)

# Retrieve, Update and Delete single Content
class ContentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Content.objects.all()
    serializer_class = ContentSerializer

    

    