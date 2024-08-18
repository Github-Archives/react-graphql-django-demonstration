import graphene
from graphene_django.types import DjangoObjectType
from .models import Book


# * Test Query
class BookType(DjangoObjectType):
    class Meta:
        model = Book


class Query(graphene.ObjectType):
    all_books = graphene.List(BookType)
    book_by_id = graphene.Field(BookType, id=graphene.Int())

    def resolve_all_books(self, info):
        return Book.objects.all()

    def resolve_book_by_id(self, info, id):
        return Book.objects.get(pk=id)


schema = graphene.Schema(query=Query)
