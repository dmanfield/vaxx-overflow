from django.contrib import admin
from .models import Clinic, Address
# Register your models here.


# class ClinicAdmin(admin.ModelAdmin):
#     fields = ["first_name", "last_name", "email", "provider_name", "business_email", "business_phone"]

# class AddressAdmin(admin.ModelAdmin):
#     fields = ["street_address", "city", "state", "zipcode", "clinic"]

# admin.site.register(Clinic, ClinicAdmin)
# admin.site.register(Address, AddressAdmin)

admin.site.register(Clinic)