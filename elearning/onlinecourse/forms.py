from django import forms
# from django.contrib.auth.models import User  #This bring Arrtribute Error, Import Custom user instead
from .models import CustomUser
from django.contrib.auth.forms import UserCreationForm

class SignupForm(UserCreationForm):
    email = forms.EmailField(required=True)
    first_name = forms.CharField(max_length=30, required=True)
    last_name = forms.CharField(max_length=30, required=True)
    dob = forms.DateField(
        widget=forms.DateInput(attrs= {"type": "date"}), required=True
    )

    class Meta:
        model = CustomUser
        fields = ["first_name", "last_name", "username", "dob", "password1","password2"]