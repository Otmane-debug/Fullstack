from django.shortcuts import render
from rest_framework.views import APIView
from .models import Product 
from .serializer import ProductSerializer
from rest_framework.response import Response
from django.shortcuts import get_object_or_404


class RenderData(APIView):
    
    def get(self, request):
        output = [{
            "Model_id": output.Model_id,
            "Brand": output.Brand,
            "Street_price": output.Street_price, 
            "Picture_1": output.Picture_1, 
            "Description": output.Description
            }
            for output in Product.objects.all()
        ]

        print(Product.objects.all())
        return Response(output)


    def post(self, request):
        serializer = ProductSerializer(data=request.data)

        if serializer.is_valid(raise_exception=True):
            serializer.save()

        return Response(serializer.data)


