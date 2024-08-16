##### Create local virtual environment to keep Python libraries seperate

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

This will start the Django development server, and you should see output in the terminal indicating that the server is running.

Visit `http://127.0.0.1:8000/` to see the app in action.
