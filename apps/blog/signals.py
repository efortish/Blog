# from django.db.models.signals import post_migrate
# from django.contrib.auth import get_user_model

# def create_superuser(sender, **kwargs):
#     User = get_user_model()
#     if not User.objects.filter(username="root").exists():
#         User.objects.create_superuser('root', 'root@example.com', 'root1999$')

# post_migrate.connect(create_superuser)