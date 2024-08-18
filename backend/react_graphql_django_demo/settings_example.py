# This is an Example settings file
# Users should rename this file to `settings.py` and fill in the required values
SECRET_KEY = 'your-secret-key-here'
DEBUG = True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'your_db_name',
        'USER': 'your_db_user',
        'PASSWORD': 'your_db_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

# Add other settings...
