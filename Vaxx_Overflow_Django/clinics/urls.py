from .views import RegisterAPI, TextNotificationAPI
from django.urls import path
from knox import views as knox_views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView



urlpatterns = [

    path('api/clinic/register/', RegisterAPI.as_view(), name='register'),
    path('api/clinic/text-notification/', TextNotificationAPI.as_view(), name='text'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # path('api/login/', LoginAPI.as_view(), name='login'),
    # path('api/logout/', knox_views.LogoutView.as_view(), name='logout'),
    # path('api/logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
]

