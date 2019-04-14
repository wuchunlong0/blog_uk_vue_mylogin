# -*- coding: utf-8 -*-
from django.shortcuts import render
from django.http.response import HttpResponse,HttpResponseRedirect
from django.contrib.auth.decorators import login_required
from .models import Blogs
from django.contrib.auth.models import User
from myAPI.pageAPI import djangoPage,PAGE_NUM,toInt 

def index(request):
    return  render(request, 'home/index.html' , context=locals()) 

#创建博客 http://localhost:9000/blog/create/
@login_required
def create(request):
    action='/blogapi/apiblogs/'
    redirect='/blog/show/'
    return render(request,"blog/create.html", context=locals())

#编辑博客 http://localhost:9000/blog/edit/13
def edit(request,id ):
    action='/blogapi/apiblogs/'
    redirect='/blog/show/'
    return render(request,"blog/edit.html", context=locals())

#显示博客 http://localhost:9000/blog/show/
def show(request,page):   
    page = toInt(page) 
    return render(request,"blog/show.html",context=locals())

# http://localhost:9000/blog/delete/
def delete(request,id):
    id = toInt(id)         
    Blogs.objects.filter(id = id).delete()
    return HttpResponseRedirect('/blog/show/') 

# http://localhost:9000/blog/users/
def users(request,page):
    page = toInt(page) 
    Users = User.objects.all() #获得数据库记录 形式  
    users_list, pageList, paginator, page = djangoPage(Users,page,PAGE_NUM)
    offset = PAGE_NUM * (page - 1)
    return render(request,"blog/user_list.html",context=locals())
