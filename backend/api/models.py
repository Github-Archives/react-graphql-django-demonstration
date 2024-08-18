from django.db import models


# Create your models here.
# Every class Model is a new table in the database
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

    def __str__(self):
        return self.field1
