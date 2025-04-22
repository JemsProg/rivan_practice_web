# contact/urls.py

from django.urls import path
from .views import contact_view, my_basic_view

urlpatterns = [
    path('api/contact/', contact_view, name='contact'),
    path('', my_basic_view)
]
