# Django Server

##### Create local virtual environment within `react-graphql-django-demonstration/backend/`

```bash
python3 -m venv .venv
```

##### Activate the virtual environment

```bash
source .venv/bin/activate
```

##### Activate **my** .venv file

```bash
source django5/bin/activate
```

#### 1. Migrate

Apply the migrations to create the corresponding table in your SQLite database.

```bash
python manage.py makemigrations api
```

```bash
python manage.py migrate
```

#### 2. Run server

```bash
python manage.py runserver
```

##### 3. Install packages listed in `requirements.txt`

```bash
pip install -r requirements.txt
```

##### 4. Freeze installed packages

```bash
pip freeze > requirements.txt
```

##### 4.1 (Optional) Seed DB with test data

```bash
python manage.py seed
```

5. Create PostgreSQL db user

```bash
createuser db_user_name --interactive --pwprompt
```

6. Create database (if you haven't already)

```bash
createdb db_name
```

7. Update `settings.py`

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'database_name',
        'USER': 'database_user_name',
        'PASSWORD': 'your_database_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
```

8. Grant all privileges on the database to the user

```sql
GRANT ALL PRIVILEGES ON DATABASE your_db_name TO your_username;
\q
```

9. Apply migration again to create necessary tables

```bash
python manage.py makemigrations api
python manage.py migrate
```

7. Connect to PostgreSQL

```bash
psql -U db_user_name -d db_name
```

**All commands within `/backend` ⤴️**

This will start the Django development server, and you should see output in the terminal indicating that the server is running.

Visit `http://127.0.0.1:8000/` to see Django app in action.

---

# React UI (built with Vite)

##### Go to `react-graphql-django-demonstration/frontend` and install yarn + project dependencies

```bash
yarn
```

##### Start front end

```bash
yarn dev
```

Visit `http://localhost:5173/` to see React app in action.

If the backend is also running in this current setup they will connect and display database data to the UI

# Postman Queries

GET `allBooks`
POST → http://localhost:8000/graphql/

Body (GraphQL - No Schema)

```json
{
  allBooks {
    title
    author
    publishedDate
    # Add other fields as defined in the Book model
  }
}
```
