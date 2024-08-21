from django.db import models
from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer


# Create your models here...
# Every class Model is a new table in the database
# * Test Book Model
class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    published_date = models.DateField()

    # TODO: This may need to be fixed
    def __str__(self):
        return self.title


# * Test MyModel Model
class MyModel(models.Model):
    field1 = models.CharField(max_length=100)
    field2 = models.CharField(max_length=100)
    field3 = models.CharField(max_length=100)

    # Update models.py: Override the save method in your model to send data to the WebSocket group:

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)(
            "api_mymodel",
            {
                "type": "send_mymodel_data",
                "data": {
                    "field1": self.field1,
                    "field2": self.field2,
                    "field3": self.field3
                }
            }
        )
