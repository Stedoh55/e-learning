from rest_framework import generics,status,filters
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from .models import User
from .serializers import LearnerSerializer, InstructorSerializer, LoginSerializer, UserSerializer
from django_filters.rest_framework import DjangoFilterBackend


# Create your views here.
# The Signup Views for the Learners and Instructors
class LearnerSignupView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = LearnerSerializer

class InstructorSignupView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = InstructorSerializer

# The Login view for Users
class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request,*args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.validated_data, status=status.HTTP_200_OK)

# Retrieving the Details of Authenticated user from their Tokens
class CurrentUserView(APIView):
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
    
# Retrieving all the users or create one
class UserListCreateView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]

    # FIelds allowed for filtering
    filterset_fields = ["email", "role"]

    # Searching allowed across fields
    search_fields = ["username", "email", "first_name", "last_name"]

    # Ordering field
    ordering_fields = ["first_name", "last_name","date_joined","username", "role"]
    ordering = ["first_name"]

# Retrieve, Update or Delete a Single user
class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    

    

