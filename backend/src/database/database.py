import os

from dotenv import load_dotenv
from sqlmodel import Session, create_engine

# Load the database_config.env file that is in the same directory as this file
load_dotenv(
	dotenv_path=os.path.join(os.path.dirname(__file__), "database_config.env")
)

DATABASE_USERNAME = os.getenv("DATABASE_USERNAME")
DATABASE_PASSWORD = os.getenv("DATABASE_PASSWORD")
DATABASE_HOST = os.getenv("DATABASE_HOST")
DATABASE_NAME = os.getenv("DATABASE_NAME")


DATABASE_URL = f"mysql+pymysql://{DATABASE_USERNAME}:{DATABASE_PASSWORD}@{DATABASE_HOST}/{DATABASE_NAME}"
print("DATABASE_URL:", DATABASE_URL)
# A SQLModel engine is what holds the connections to the database.
# You would have one single engine object for all your code to connect
# to the same database.
engine = create_engine(DATABASE_URL)


# A Session is what stores the objects in memory and keeps track of any changes
# needed in the data then it uses the engine to communicate with the database.
def get_session():
	with Session(engine) as session:
		yield session
