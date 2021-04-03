from django.contrib import admin
from .models import People
# Register your models here.


class PeopleAdmin(admin.ModelAdmin):
    fields = ["first_name", "last_name", "email", "gender", "phone_number", "zipcode", "date_of_birth", "job", "group_living", "vaccine_brands", "health_condition"]

admin.site.register(People, PeopleAdmin)
