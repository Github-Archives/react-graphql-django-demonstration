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
