import graphene
from graphene_django.types import DjangoObjectType
from .models import YourModel  # Replace with your actual model


class YourModelType(DjangoObjectType):
    class Meta:
        model = YourModel


class Query(graphene.ObjectType):
    all_your_models = graphene.List(YourModelType)

    def resolve_all_your_models(self, info, **kwargs):
        return YourModel.objects.all()


schema = graphene.Schema(query=Query)
