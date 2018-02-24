from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    return render(request, 'research/Main.html')

def ranking(request):
    return render(request, 'research/Ranking.html')

def vote(request):
    context = ''
    return render(request, 'research/Vote.html')