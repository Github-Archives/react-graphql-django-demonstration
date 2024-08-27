from django.db import models
from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer


# Every class Model is a new table in the database
class BloodTypes(models.Model):
    county_name = models.CharField(max_length=100)
    population = models.IntegerField()
    o_plus = models.DecimalField(decimal_places=3)
    a_plus = models.DecimalField(decimal_places=3)
    b_plus = models.DecimalField(decimal_places=3)
    ab_plus = models.DecimalField(decimal_places=3)
    o_minus = models.DecimalField(decimal_places=3)
    a_minus = models.DecimalField(decimal_places=3)
    b_minus = models.DecimalField(decimal_places=3)
    ab_minus = models.DecimalField(decimal_places=3)

    def __str__(self):
        return self.county_name

# * Test Book Model


class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    published_date = models.DateField()

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
