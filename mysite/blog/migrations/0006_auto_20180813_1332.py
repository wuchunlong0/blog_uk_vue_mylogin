# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2018-08-13 05:32
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('blog', '0005_auto_20180813_1304'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='blogs',
            name='name',
        ),
        migrations.RemoveField(
            model_name='blogs',
            name='password',
        ),
        migrations.AddField(
            model_name='blogs',
            name='author',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='blogs',
            name='content',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='blogs',
            name='created_at',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
        migrations.AddField(
            model_name='blogs',
            name='subject',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='blogs',
            name='summary',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]