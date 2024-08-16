import graphene
from graphene_django.types import DjangoObjectType
from .models import Book


# * Test Query
class BookType(DjangoObjectType):
    class Meta:
        model = Book


class Query(graphene.ObjectType):
    all_books = graphene.List(BookType)

    def resolve_all_books(self, info):
        return Book.objects.all()


schema = graphene.Schema(query=Query)
