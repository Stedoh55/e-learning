from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    ROLE_CHOICES = (
        ('learner', 'Learner'),
        ('instructor', 'Instructor'),
        ('manager', 'Manager'),
    )

    date_of_birth = models.DateField(null=True, blank=True)
    bio = models.TextField(blank=True)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)

    def __str__(self):
        return self.username
    