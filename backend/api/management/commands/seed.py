# Sample data for the database
from django.core.management.base import BaseCommand
from api.models import Book


class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        Book.objects.create(title="The Great Gatsby",
                            author="F. Scott Fitzgerald", published_date="1925-04-10")
        Book.objects.create(
            title="1984", author="George Orwell", published_date="1949-06-08")
        Book.objects.create(title="To Kill a Mockingbird",
                            author="Harper Lee", published_date="1960-07-11")
