Hi, this is a PWA website for a product called OM pets.

The backend was made in Django connected to AWS to serve media and it is connected to the frontend made in React Js, it is still a work in progress, is currently deployed on render: https://om-cz4g.onrender.com/

If you want to use this project to make yours please remember including all .env variables such as:

SECRET_KEY
DEBUG
ALLOWED_HOSTS_DEPLOY
DATABASE_URL
CORS_ORIGIN_WHITELIST_DEPLOY
CSRF_TRUSTED_ORIGINS_DEPLOY

AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_STORAGE_BUCKET_NAME
