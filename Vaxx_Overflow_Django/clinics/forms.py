from django import forms
from .models import Clinic, Address


class ClinicForm(forms.ModelForm):
    class Meta:
        model = Clinic
        fields = ("first_name", "last_name", "email", "provider_name", "business_email", "business_phone")


class AddressForm(forms.ModelForm):
    class Meta:
        model = Address
        fields = ("street_address", "city", "state", "zipcode")