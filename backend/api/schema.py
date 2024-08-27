import graphene
from graphene_django.types import DjangoObjectType
from .models import Book, MyModel, BloodTypes


# Blood Type
class BloodType(DjangoObjectType):
    class Meta:
        model = BloodTypes


# Define BookType
class BookType(DjangoObjectType):
    class Meta:
        model = Book


# Define MyModelType
class MyModelType(DjangoObjectType):
    class Meta:
        model = MyModel


# Define Queries
class Query(graphene.ObjectType):
    all_books = graphene.List(BookType)
    book_by_id = graphene.Field(BookType, id=graphene.Int())
    last5_my_models = graphene.List(MyModelType)

    def resolve_all_books(self, info):
        return Book.objects.all()

    def resolve_book_by_id(self, info, id):
        return Book.objects.get(pk=id)

    def resolve_last5_my_models(self, info):
        return MyModel.objects.order_by('-id')[:5]


# Define CreateMyModel Mutation
class CreateMyModel(graphene.Mutation):
    class Arguments:
        field1 = graphene.String(required=True)
        field2 = graphene.String(required=True)
        field3 = graphene.String(required=True)

    mymodel = graphene.Field(MyModelType)

    def mutate(self, info, field1, field2, field3):
        mymodel = MyModel(field1=field1, field2=field2, field3=field3)
        mymodel.save()
        return CreateMyModel(mymodel=mymodel)


# Define Mutations
class Mutation(graphene.ObjectType):
    create_mymodel = CreateMyModel.Field()


# Define Schema
schema = graphene.Schema(query=Query, mutation=Mutation)
