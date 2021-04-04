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
    
    # extra validation
    # on creation we validate pw
    # if pw not none we create user
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


