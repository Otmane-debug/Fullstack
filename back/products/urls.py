from django.urls import path
from .views import *

urlpatterns = [
    path('', RenderData.as_view(), name="data"),
]
