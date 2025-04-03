from django.utils import timezone

#Calculating the current time of the user
def current_datetime(request):
    return{'current_datetime': timezone.now()}