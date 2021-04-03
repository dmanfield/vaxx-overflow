from rest_framework import serializers
from .models import Clinic

# User Serializer
class ClinicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clinic
        fields = "__all__"

# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clinic
        fields = "__all__"
        extra_kwargs = {'password': {'write_only': True}}

