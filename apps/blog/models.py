from django.db import models
from django.utils import timezone
from apps.category.models import Category
from ckeditor.fields import RichTextField
from ckeditor_uploader.fields import RichTextUploadingField

def blog_thumbnail_directory(instance, filename):
#La función recibe dos parámetros: instance: La instancia del modelo al que pertenece el archivo que se está cargando. Esto significa que puedes acceder a los campos de esa instancia. filename: El nombre original del archivo que se está cargando, por ejemplo, thumbnail.jpg.
    return 'blog/{0}/{1}'.format(instance.tittle, filename) #Esto genera: 'blog/titulo_blog/nombre_archivo'

# Create your models here.


class Post(models.Model):
    tittle =        models.CharField(max_length=225)
    slug =          models.SlugField(max_length=225, unique=True)
    thumbnail =     models.ImageField(upload_to=blog_thumbnail_directory, max_length=500)

    excerpt =       models.CharField(max_length=255)
    # excerpt is Mini abstract - resumen
    content =   RichTextUploadingField()
    time_read =     models.IntegerField()

    published =     models.DateTimeField(default=timezone.now(), auto_now=False, auto_now_add=False)
    
    category =      models.ForeignKey(Category, on_delete=models.PROTECT)

    views = models.IntegerField(default=0, blank=True)

    class Meta:
        ordering = ('-published',)

    def __str__(self):
        return self.tittle
    
    def get_view_count(self):
        views = ViewCount.objects.filter(post=self).count()
        return views

class ViewCount(models.Model):
    post = models.ForeignKey(Post, related_name='blogpost_view_count', on_delete=models.CASCADE)
    ip_address = models.CharField(max_length=225)

    def __str__(self) -> str:
        return f"{self.ip_address}"
    

