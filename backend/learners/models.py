from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class LearnerProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="learner_profile")
    date_of_birth = models.DateTimeField(blank=True, null=True)
    bio = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.user.username}'s Profile"