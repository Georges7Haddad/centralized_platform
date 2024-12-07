1. Create a Virtual Environment

```bash
virtualenv env
```

2. Activate the Virtual Environment

Windows

```bash
env\Scripts\activate
```

Linux/Mac

```bash
source env/bin/activate
```

3. Install Dependencies

```bash
pip install -r dependencies.txt
```

4. Start the server

```bash
fastapi dev src/server.py
```

5. Accessing the API

- Base URL: http://127.0.0.1:8000
- Interactive API Docs (Swagger UI): http://127.0.0.1:8000/docs
- ReDoc Documentation: http://127.0.0.1:8000/redoc
