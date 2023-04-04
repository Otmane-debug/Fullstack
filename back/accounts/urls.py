from django.urls import path
from . import views
from .views import MyToKenObtainPairView
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
urlpatterns = [
    path('register/', views.register_user, name="register"),
    path('', views.getRoutes),
    path('token/', MyToKenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
