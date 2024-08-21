from django.urls import re_path
from . import consumer

websocket_urlpatterns = [
    re_path(r'ws/api_mymodel/$', consumer.MyModelConsumer.as_asgi()),
]
