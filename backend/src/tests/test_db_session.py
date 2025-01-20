from fastapi.testclient import TestClient
from sqlalchemy import text

from src.database.database import get_session
from src.server import app

client = TestClient(app)


def test_database_connection():
	with next(get_session()) as session:
		result = session.exec(text("SELECT 1")).one()
		assert (
			result[0] == 1
		), "Database connection test failed: Expected result to be 1"
