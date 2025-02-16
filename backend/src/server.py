from typing import Union

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.database.database import create_db_and_tables
from src.graphql.user import user_schema

app = FastAPI()

origins = [
	"http://localhost:8000",  # React or frontend running locally
]
# We need to allow requests from these origins
app.add_middleware(
	CORSMiddleware,
	allow_origins=origins,  # List of allowed origins
	allow_credentials=True,  # Allow cookies and credentials
	allow_methods=["*"],  # Allow all HTTP methods
	allow_headers=["*"],  # Allow all headers
)

app.include_router(user_schema)


@app.get("/")
def root_api():
	return {"Hello": "World from FASTAPI"}


@app.get("/example/{example_id}")
def get_example(example_id: int, q: Union[str, None] = None):
	return {"example_id": example_id}


@app.get("/health")
def health_check():
	return {"status": "healthy"}

@app.on_event("startup")
def on_startup():
    create_db_and_tables()