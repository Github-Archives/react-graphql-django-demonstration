from django.urls import path
from . import views
# * Graphene GraphQL attempt
# from graphene_django.views import GraphQLView
# from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('', views.home, name='home'),  # Define a view for the root URL
    # * Graphene GraphQL attempt
    # path("graphql/", csrf_exempt(GraphQLView.as_view(graphiql=True))),
]
