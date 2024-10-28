from django.contrib import admin

# Register your models here.

from .models import Post

class PostAdmin(admin.ModelAdmin):
    
    # fieldsets brings a modified form to fill information, list_display shows what you are going to see in the list of all objects


    # fieldsets = [
    #     (None, {"fields": ["name"]}),
    #     ("Url", {"fields":["slug"]}),
    #     (None,{"fields":["views"]}),
    # ]
    list_display = ["tittle", "slug", "thumbnail","excerpt", "content", "time_read", "published", "category", "views"]
    
    



admin.site.register(Post, PostAdmin)