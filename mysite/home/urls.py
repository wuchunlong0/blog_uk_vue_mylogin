# -*- coding: utf-8 -*-
from django.conf.urls import url, include
from myAPI import checkcode
from . import home

# http://localhost:9000/home/checkcodeGIF/
urlpatterns = [
    url(r'^index/', home.index, name="index"),
    url(r'^checkcodeGIF/', checkcode.checkcodeGIF, name="checkcodeGIF"),
    url(r'^getcheckcode/', checkcode.getcheckcode, name="getcheckcode"),
    url(r'^myregister/', home.myregister, name="myregister"),
    url(r'^mylogin/', home.mylogin, name="mylogin"),
]