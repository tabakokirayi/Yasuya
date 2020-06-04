from django.shortcuts import render


def index(request):
    return render(request, 'yasuya/index.html')


def signup(request):
    return render(request, 'yasuya/signup.html')


def signin(request):
    return render(request, 'yasuya/signin.html')
