# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2018-08-13 05:04
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_blog_comment'),
    ]

    operations = [
        migrations.CreateModel(
            name='Blogs',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=20, null=True)),
                ('password', models.CharField(blank=True, max_length=20, null=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='blog',
            name='author',
        ),
        migrations.AlterField(
            model_name='comment',
            name='blog_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='blog.Blogs'),
        ),
        migrations.DeleteModel(
            name='Blog',
        ),
    ]
