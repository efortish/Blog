# Generated by Django 5.1.1 on 2024-10-06 02:08

import apps.blog.models
import ckeditor.fields
import datetime
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('category', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tittle', models.CharField(max_length=225)),
                ('slug', models.SlugField(max_length=225, unique=True)),
                ('thumbnail', models.ImageField(upload_to=apps.blog.models.blog_thumbnail_directory)),
                ('excerpt', models.CharField(max_length=255)),
                ('description', ckeditor.fields.RichTextField()),
                ('time_read', models.IntegerField()),
                ('published', models.DateTimeField(default=datetime.datetime(2024, 10, 6, 2, 8, 12, 227333, tzinfo=datetime.timezone.utc))),
                ('views', models.IntegerField(blank=True, default=0)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='category.category')),
            ],
            options={
                'ordering': ('-published',),
            },
        ),
        migrations.CreateModel(
            name='ViewCount',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ip_address', models.CharField(max_length=225)),
                ('post', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='blogpost_view_count', to='blog.post')),
            ],
        ),
    ]
