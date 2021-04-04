from django import forms
from .models import People


class PeopleForm(forms.ModelForm):
    class Meta:
        model = People
        fields = ("first_name", "last_name", "email", "gender", "phone_number", "zipcode", "date_of_birth", "job", "group_living", "vaccine_brands", "health_condition")

