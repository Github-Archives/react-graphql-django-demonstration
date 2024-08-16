# Django Server

##### Create local virtual environment within `react-graphql-django-demonstration/backend/`

```bash
python3 -m venv .venv
```

##### Activate the virtual environment

```bash
source .venv/bin/activate
```

##### Activate my .venv file

```bash
source django4/bin/activate
```

#### 1. Migrate

```bash
python manage.py migrate
```

#### 2. Run server

```bash
python manage.py runserver
```

All commands within `/backend` ⤴️

This will start the Django development server, and you should see output in the terminal indicating that the server is running.

Visit `http://127.0.0.1:8000/` to see Django app in action.

# React UI

##### Go to `react-graphql-django-demonstration/frontend` and install yarn & yarn packages

```bash
yarn
```

##### Start front end

```bash
yarn dev
```

Visit `http://localhost:5173/` to see React app in action.
