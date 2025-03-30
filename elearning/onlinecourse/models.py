import os
from django.db import models
from datetime import datetime
from django.core.validators import MinValueValidator, MaxValueValidator
from django.dispatch import receiver
from django.db.models.signals import post_delete
from django.core.files.storage import default_storage


# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length=30, null=False, default='John')
    last_name = models.CharField(max_length=30, null=False, default='Doe')
    dob = models.DateField(null=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class Course(models.Model):
    name = models.CharField(max_length=50, null=False)
    image = models.ImageField(upload_to='course_images/')
    description = models.TextField(max_length=200, null=False)
    pub_date = models.DateField(null=True)
    total_enrollment = models.IntegerField(null=False, default=0)

    def __str__(self):
        return f"{self.name}"
    
    # Deleting old image if new one is saved (Replacement or Update)
    def save(self, *args, **kwargs):
        try:
            #Fetch existing course from the database
            old_instance = Course.objects.get(pk=self.pk)
            if old_instance.image and old_instance.image != self.image:
                if default_storage.exists(old_instance.image.path):
                    os.remove(old_instance.image.path)          #Deleting the old Picture
        except Course.DoesNotExist:
            pass                                                #Leaving the picture if no Course exist
        super().save(*args, **kwargs)
    
# Deleting the image when the course is deleted
@receiver(post_delete, sender=Course)
def delete_course_image(sender, instance, **kwargs):
    if instance.image:
        if default_storage.exists(instance.image.path):
            os.remove(instance.image.path)


class Learner(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    occupation = models.CharField(max_length=50, null=True)
    social_link = models.CharField(max_length=100, null=True)

    def __str__(self):
        return f"{self.user_id}"

class Instructor(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    occupation = models.CharField(max_length=50, null=True)
    social_link = models.CharField(max_length=100, null=True)

    def __str__(self):
        return f"{self.user_id}"

class Enroll_mode(models.Model):
    mode = models.CharField(max_length=20, null=False)

    def __str__(self):
        return f"{self.mode}"

class course_enrollment(models.Model):
    date_enrolled = models.DateTimeField(default=datetime.now, null=False)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    mode = models.ForeignKey(Enroll_mode, on_delete=models.CASCADE, null=True)
    rating = models.PositiveIntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    course_id = models.ForeignKey(Course, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return f"{self.course_id}"
   






