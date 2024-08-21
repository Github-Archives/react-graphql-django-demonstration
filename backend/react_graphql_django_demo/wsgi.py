"""
WSGI config for react-graphql-django-demo project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/wsgi/
"""
# ! This WSGI file is not being used
import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE',
                      'react_graphql_django_demo.settings')

application = get_wsgi_application()
