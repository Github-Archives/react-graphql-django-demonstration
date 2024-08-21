from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import MyModel
# logging for debugging
import logging

logger = logging.getLogger(__name__)


# Create your views here.
def home(request):
    return HttpResponse("Hello, world from Django /backend/api/views.py!")


@csrf_exempt
def submit_data(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            field1 = data.get('field1')
            field2 = data.get('field2')
            field3 = data.get('field3')
            # Save data to the database
            MyModel.objects.create(field1=field1, field2=field2, field3=field3)
            return JsonResponse({'message': 'Data submitted successfully'})
        except Exception as e:
            logger.error(f"Error in submit_data: {e}")
            return JsonResponse({'error': str(e)}, status=500)
    return JsonResponse({'error': 'Invalid request'}, status=400)
