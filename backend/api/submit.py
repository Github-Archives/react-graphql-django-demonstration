import requests
import json

url = 'http://localhost:8000/api/submit'
data = {
    'field1': 'value1',
    'field2': 'value2',
    'field3': 'value3'
}

response = requests.post(url, data=json.dumps(data), headers={
                         'Content-Type': 'application/json'})

print(response.status_code)
print(response.json())
