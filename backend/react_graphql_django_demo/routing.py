from django.urls import re_path
from . import consumers

websocket_urlpatterns = [
    re_path(r'ws/api_mymodel/$', consumers.MyModelConsumer.as_asgi()),
]
