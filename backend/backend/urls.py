from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('contact.urls')),
    path('api/quotation/', include('quotation.urls')),

]
