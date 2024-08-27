from . import views
from django.urls import path
from .views import submit_data

# ! I probably have to add something here for this to work

urlpatterns = [
    # path('', views.home, name='home'),  # Define a view for the root URL
    path('api/submit', submit_data, name='submit_data'),
    # path("graphql/", csrf_exempt(GraphQLView.as_view(graphiql=True))), # Alternatively, you can use this line to enable the GraphiQL interface
]
