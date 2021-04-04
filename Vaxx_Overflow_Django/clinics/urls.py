from .views import RegisterAPI
from django.urls import path

urlpatterns = [
    path('api/clinic/register/', RegisterAPI.as_view(), name='clinic/register'),
]