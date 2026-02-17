from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

def health(request):
    return JsonResponse({"status": "ok"})


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('contact.urls')),
    path('api/quotation/', include('quotation.urls')),
    path("health/", health),


]
