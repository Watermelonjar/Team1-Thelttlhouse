from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'index.html')

def about(request):
    return render(request, 'about.html')

def History(request):
    return render(request, 'History.html')

def gallery(request):
    return render(request, 'gallery.html')

def donate(request):
    return render(request, 'donate.html')