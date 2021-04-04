from django import forms
from .models import Clinic, Address
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm




class ClinicForm(forms.ModelForm):
    class Meta:
        model = Clinic
        fields = ( "email", "user_name", "first_name", "last_name", "provider_name", "business_email", "business_phone")


class AddressForm(forms.ModelForm):
    class Meta:
        model = Address
        fields = ("street_address", "city", "state", "zipcode")