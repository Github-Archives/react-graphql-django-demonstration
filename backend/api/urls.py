from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # Define a view for the root URL
]
