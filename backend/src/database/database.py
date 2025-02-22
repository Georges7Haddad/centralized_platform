import os

from dotenv import load_dotenv
from fastapi import Depends
from sqlmodel import Session, SQLModel, create_engine

load_dotenv(
	dotenv_path=os.path.join(os.path.dirname(__file__), "database_config.env")
)

DATABASE_HOST = os.getenv("DATABASE_HOST")
DATABASE_USERNAME = os.getenv("DATABASE_USERNAME")
DATABASE_PASSWORD = os.getenv("DATABASE_PASSWORD")
DATABASE_NAME = os.getenv("DATABASE_NAME")

url = f"mysql+pymysql://{DATABASE_USERNAME}:{DATABASE_PASSWORD}@{DATABASE_HOST}/{DATABASE_NAME}"

engine = create_engine(url)


def create_db_and_tables():
	SQLModel.metadata.create_all(engine)


def get_session():
	with Session(engine) as session:
		yield session

get_session_dependency = Depends(get_session)