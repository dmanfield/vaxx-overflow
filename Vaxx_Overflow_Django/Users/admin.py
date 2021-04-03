from django.contrib import admin
from .models import User
# Register your models here.


class UserAdmin(admin.ModelAdmin):
    fields = ["first_name", "last_name", "email", "gender", "phone_number", "zipcode", "date_of_birth", "job", "phase_category", "vaccine_brands"]

admin.site.register(User, UserAdmin)