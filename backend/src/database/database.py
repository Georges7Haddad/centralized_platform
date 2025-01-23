import os

import boto3
from dotenv import load_dotenv
from sqlalchemy.engine.url import URL
from sqlmodel import Session, create_engine

load_dotenv(
	dotenv_path=os.path.join(os.path.dirname(__file__), "database_config.env")
)
pem_file_path = os.path.join(os.path.dirname(__file__), "eu-west-3-bundle.pem")

DATABASE_USERNAME = os.getenv("DATABASE_USERNAME")
DATABASE_HOST = os.getenv("DATABASE_HOST")
DATABASE_NAME = os.getenv("DATABASE_NAME")
DATABASE_PORT = os.getenv("DATABASE_PORT")
AWS_REGION = os.getenv("AWS_REGION")


def generate_iam_auth_token():
	client = boto3.client("rds", region_name=AWS_REGION)
	token = client.generate_db_auth_token(
		DBHostname=DATABASE_HOST,
		Port=int(DATABASE_PORT),
		DBUsername=DATABASE_USERNAME,
	)
	return token


DATABASE_PASSWORD = generate_iam_auth_token()

DATABASE_URL = str(
	URL.create(
		drivername="mysql+pymysql",
		username=DATABASE_USERNAME,
		password=DATABASE_PASSWORD,
		host=DATABASE_HOST,
		port=DATABASE_PORT,
		database=DATABASE_NAME,
	)
)

# A SQLModel engine is what holds the connections to the database.
# You would have one single engine object for all your code to connect
# to the same database.
engine = create_engine(
	DATABASE_URL,
	connect_args={"ssl": {"ssl_ca": pem_file_path}},
)


# A Session is what stores the objects in memory and keeps track of any changes
# needed in the data then it uses the engine to communicate with the database.
def get_session():
	with Session(engine) as session:
		yield session
