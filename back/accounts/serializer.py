from rest_framework import serializers
from .models import CustomUser

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'password', 'address1', 'address2', 'city', 'zip', 'first_name', 'last_name']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            address1=validated_data['address1'],
            address2=validated_data['address2'],
            city=validated_data['city'],
            zip=validated_data['zip'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )
        return user