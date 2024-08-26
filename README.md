# React GraphQL Django Demonstration

## Requirements

#### Backend

- Python 3.10.x
- Django 4.2.x
- Other dependencies are listed in `requirements.txt`

#### Frontend

- NPM or Yarn
- Node

This project demonstrates the integration of a Django backend with a React frontend using GraphQL. The backend is powered by Django, and the frontend is built with Vite. This guide provides steps to set up and run the project locally.

Follow [Django Backend Setup](#django-backend-setup) and [React Frontend Setup](#react-frontend-setup).
You'll need to run both Backend and Frontend seperately for the app to function properly.

## Django Backend Setup

### 1. Set Up Virtual Environment

Navigate to the backend directory:

```bash
cd react-graphql-django-demonstration/backend/
```

Create a virtual environment with `venv`:

```bash
python3 -m venv .venv
```

Activate the virtual environment:

_macOS/Linux Activate_

```bash
source .venv/bin/activate
```

_Windows Activate_

```bash
.\.venv\Scripts\Activate
```

### 2. Install Dependencies

Install the required packages:

```bash
pip install -r requirements.txt
```

(Optional) Freeze the installed packages:

```bash
pip freeze > requirements.txt
```

### 3. Database Setup

#### 3.1 Migrate Database

Apply migrations to set up the database schema:

```bash
python manage.py makemigrations api
python manage.py migrate
```

#### 3.2 Seed the Database (Optional)

(Optional) Populate the database with test data:

```bash
python manage.py seed
```

### 4. PostgreSQL Setup

#### 4.1 Create Database User

```bash
createuser db_user_name --interactive --pwprompt
```

#### 4.2 Create Database

If you haven't already, create the database:

```bash
createdb db_name
```

#### 4.3--A. Update `settings.py`

Edit your `settings.py` to configure the PostgreSQL database if not using an `.env` file to store credentials:

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
}

```

#### 4.3--B. Alternatively, Update `.env`

If you prefer to use a `/backend/server/.env` file for your PostgreSQL database credentials instead of storing them in `/backend/server/settings.py`, add the following to your `.env` file and update the credential values.

Setting `DEBUG=True` enables debug mode, which provides detailed error pages and additional logging. For production environments, set `DEBUG=False` to avoid exposing sensitive information.

```.env
SECRET_KEY=your-secret-key-here
DEBUG=True
DB_NAME=your-db-name-here
DB_USER=your-db-username-here
DB_PASSWORD=your-password-here
DB_HOST=localhost
DB_PORT=5432
```

#### 4.4 Grant Privileges

Grant the user all privileges on the database then quit out:

```sql
GRANT ALL PRIVILEGES ON DATABASE your_db_name TO your_username;
\q
```

#### 4.5 Apply Migrations Again

Apply migrations to ensure all necessary tables are created:

```bash
python manage.py makemigrations api
python manage.py migrate
```

#### 4.6 Connect to PostgreSQL

```bash
psql -U db_user_name -d db_name
```

### 5. Run the Django Server

#### 5.1 Run with WebSocket Support (Daphne)

##### **NOTE**: _Websocket Functionality currently Disabled/commented out `//`_

For real-time WebSocket communication, use Daphne:

```bash
daphne -p 8000 server.asgi:application
```

#### 5.2 Run Without WebSocket (WSGI)

If WebSocket support isn't needed, run the default Django development server:

```bash
python manage.py runserver
```

Visit `http://127.0.0.1:8000/` to see the Django app in action.

---

## React Frontend Setup

_(Built with Vite)_

### 1. Install Dependencies

Navigate to the frontend directory:

```bash
cd react-graphql-django-demonstration/frontend/
```

Install the project dependencies:

Yarn:

```bash
yarn
```

NPM:

```bash
npm install
```

### 2. Start the Frontend

Start the development server:
Yarn:

```bash
yarn dev
```

NPM:

```bash
npm run dev
```

Visit `http://localhost:5173/` to see the React app in action. If the backend is also running, the frontend will connect to it and display data from the database.

---

## Postman Queries

### Query: `allBooks`

Make a POST request to the GraphQL endpoint:

- **URL:** `http://localhost:8000/graphql/`
- **Method:** `POST`
- **Body:** (GraphQL - No Schema)

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

---

## Notes

- Ensure all commands are executed within the `/backend` directory unless otherwise noted.
- The project uses SQLite by default, but you can switch to PostgreSQL by following the PostgreSQL setup steps.
- For package and package dependency checking use `pipdeptree`. Here are some common commands for `pipdeptree`:

```bash
pipdeptree
pipdeptree --json
pipdeptree --freeze
pipdeptree --reverse
pipdeptree --exclude <package1> <package2>
pipdeptree --packages <package_name>
pipdeptree --help
```
