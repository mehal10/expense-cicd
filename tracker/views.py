from django.http import HttpResponse

def home(request):
    return HttpResponse("CI/CD Pipeline Working 🚀")