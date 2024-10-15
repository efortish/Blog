#!/usr/bin/env bash
# Exit on error
set -o errexit

# Modify this line as needed for your package manager (pip, poetry, etc.)
pip install -r requirements.txt

# Convert static asset files
python manage.py collectstatic --no-input

# Apply any outstanding database migrations
python manage.py migrate

#echo "from django.contrib.auth import get_user_model; User = get_user_model(); User.objects.create_superuser('administrador', 'soyelqueadministra@gmail.com', 'estaeslaclave123')" | python manage.py shell
