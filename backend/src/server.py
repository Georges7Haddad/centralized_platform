from __future__ import annotations

from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.database.database import create_db_and_tables
from src.endpoints import routers
from src.graphql.user import user_schema


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup logic
    create_db_and_tables()
    yield

app = FastAPI(lifespan=lifespan)

# Include all routers
for router in routers:
    app.include_router(router)

@app.on_event("startup")
def startup_event():
	create_db_and_tables()

origins = [
	"http://localhost:3000",  # React or frontend running locally
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
def get_example(example_id: int, q: str | None = None):
	return {"example_id": example_id}


@app.get("/health")
def health_check():
	return {"status": "healthy"}