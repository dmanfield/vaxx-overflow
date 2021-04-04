from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import ClinicSerializer, RegisterSerializer

# Need these for APIView (registering a new user)
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework import status

# Register API
# class RegisterAPI(generics.GenericAPIView):
    
#     serializer_class = RegisterSerializer

#     def post(self, request, *args, **kwargs):
#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         user = serializer.save()
#         user.save()
        
#         return Response({
#         "user": ClinicSerializer(user, context=self.get_serializer_context()).data,
#         "token": AuthToken.objects.create(user)[1]

#         })

class RegisterAPI(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            new_user = serializer.save()
            if new_user:
                return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class LoginAPI(KnoxLoginView):
#     permission_classes = (permissions.AllowAny,)

#     def post(self, request, format=None):
#         serializer = AuthTokenSerializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         print(serializer.is_valid())
#         user = serializer.validated_data['user']
#         login(request, user)
#         return super(LoginAPI, self).post(request, format=None)
