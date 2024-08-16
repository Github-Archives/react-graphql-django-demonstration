from . import views
from django.urls import path

urlpatterns = [
    path('', views.home, name='home'),  # Define a view for the root URL
    # path("graphql/", csrf_exempt(GraphQLView.as_view(graphiql=True))), # Alternatively, you can use this line to enable the GraphiQL interface
]
