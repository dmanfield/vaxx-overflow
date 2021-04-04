from .views import PeopleView
from django.urls import path

urlpatterns = [
    path('api/user/register/', PeopleView.as_view(), name='user/register'),
]