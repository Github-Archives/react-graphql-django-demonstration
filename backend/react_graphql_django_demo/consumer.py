import json
from channels.generic.websocket import AsyncWebsocketConsumer


class MyModelConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.channel_layer.group_add("api_mymodel", self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard("api_mymodel", self.channel_name)

    async def receive(self, text_data):
        data = json.loads(text_data)
        # Handle received data if needed

    async def send_mymodel_data(self, event):
        data = event['data']
        await self.send(text_data=json.dumps(data))
