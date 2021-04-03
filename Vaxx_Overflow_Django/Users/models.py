from django.db import models
from phonenumber_field.modelfields import PhoneNumberField



#Just a basic model to build off of

#Also we could just use the built in user model..... just thought of that



PHASE_CHOICES = (
    ("1B", "1B"),
    ("1C", "1C")
)

VACCINE_CHOICES = (
    ("Pfizer-BioNTech", "Pfizer-BioNTech"),
    ("Moderna", "Moderna"),
    ("Johnson & Johnson", "Johnson & Johnson")
)

GENDER_CHOICES = (
    ("Male", "Male"),
    ("Female", "Female"),
    ("Other", "Other")
)

OCCUPATION_CHOICES = (
    ("Transportation", "Transportation"),
    ("Logistics", "Logistics"),
    ("Educational", "Educational"),
    ("Postal Service", "Postal Service"),
    ("Food Service", "Food Service"),
    ("Construction", "Construction"),
    ("Finance", "Finance"),
    ("Information Technology", "Information Technology"),
    ("Communications", "Communications"),
    ("Energy", "Energy"),
    ("Firefighter", "Firefighter"),
    ("Law Enforcement", "Law Enforcement"),
    ("Media", "Media"),
    ("Public Safety", "Public Safety"),
    ("Public Health", "Public Health")
)


class User(models.Model):
    first_name = models.CharField(max_length=25, null=False)
    last_name = models.CharField(max_length=25, null=False)
    email = models.EmailField(null=False)
    gender = models.CharField(max_length=20, choices=GENDER_CHOICES)
    phone_number = PhoneNumberField(null=False)
    zipcode = models.IntegerField(null=False)
    date_of_birth = models.DateField(null=False)
    age = models.IntegerField(null=False)
    


    job = models.CharField(max_length=50,choices=OCCUPATION_CHOICES)
    phase_category = models.CharField(max_length=20,choices=PHASE_CHOICES)
    #health_info = Might need to make this into multiple parts.
    vaccine_brands = models.CharField(max_length=20,choices=VACCINE_CHOICES)

