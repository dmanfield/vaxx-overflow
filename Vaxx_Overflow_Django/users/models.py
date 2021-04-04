from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from multiselectfield import MultiSelectField


#Just a basic model to build off of

#Also we could just use the built in user model..... just thought of that





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
    ("Manufacturing", "Manufacturing"),
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
    ("Public Health", "Public Health"),
    ("Other", "Other")
)

HEALTH_CONDITION_CHOICES = (
    ("Cancer", "Cancer"),
    ("Cerebrovascular Disease", "Cerebrovascular Disease"),
    ("Chronic Kidney Disease", "Chronic Kidney Disease"),
    ("Chronic Obstructive Pulmonary Disease", "Chronic Obstructive Pulmonary Disease"),
    ("Heart Conditions", "Heart Conditions"),
    ("Liver Disease", "Liver Disease"),
    ("Solid Organ Transplantation", "Solid Organ Transplantation"),
    ("Obesity", "Obesity"),
    ("Pregnancy", "Pregnancy"),
    ("Sickle Cell Disease", "Sickle Cell Disease"),
    ("Type 2 Diabetes Mellitus", "Type 2 Diabetes Mellitus"),
    ("Nuerologic Conditions", "Nuerologic Conditions")
)


class People(models.Model):
    first_name = models.CharField(max_length=25, null=False)
    last_name = models.CharField(max_length=25, null=False)
    email = models.EmailField(null=False)
    gender = models.CharField(max_length=20, choices=GENDER_CHOICES)
    phone_number = PhoneNumberField(null=False)
    zipcode = models.IntegerField(null=False)
    date_of_birth = models.DateField(null=False)
    
    
    health_condition = MultiSelectField(choices=HEALTH_CONDITION_CHOICES)

    group_living = models.BooleanField(default=False)
    job = models.CharField(null=False, max_length=50,choices=OCCUPATION_CHOICES)
    vaccine_brands = models.CharField(max_length=20,choices=VACCINE_CHOICES)


    def __str__(self):
        return f"{self.first_name} {self.last_name}"
