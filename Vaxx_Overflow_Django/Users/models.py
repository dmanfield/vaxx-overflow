from django.db import models
from phonenumber_field.modelfields import PhoneNumberField



#Just a basic model to build off of

class Users(models.Model):
    first_name = models.CharField(max_length=25)
    last_name = models.CharField(max_length=25)
    email = models.EmailField()
    phone_number = PhoneNumberField()
    zipcode = models.IntegerField()
    date_of_birth = models.DateField()
    job = #CHOICES
    age = models.IntegerField()
    health_info = #Might need to make this into multiple parts.

