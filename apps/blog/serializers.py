from rest_framework import serializers
from .models import *
from apps.category.serializers import CategorySerializer

class PostSerializer(serializers.ModelSerializer):
    
    category = CategorySerializer()

    class Meta:
        model=Post
        fields=[
            'id',
            'tittle',
            'slug',
            'thumbnail',
            'excerpt',
            'content',
            'time_read',
            'published',

            'views',
            'category',
            
        ]


class PostListSerializer(serializers.ModelSerializer):
    
    category = CategorySerializer()
    
    class Meta:
        model=Post
        fields=[
            'id',
            'tittle',
            'slug',
            'thumbnail',
            'excerpt',
            'time_read',
            'published',

            'views',
            'category',
            
        ]