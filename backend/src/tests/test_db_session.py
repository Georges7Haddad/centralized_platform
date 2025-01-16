import pytest
from sqlalchemy import text
from sqlmodel import Session

from src.database.database import engine


def test_database_connection():
	try:
		with Session(engine) as session:
			result = session.exec(text("SELECT 1"))
			assert result.fetchone() is not None
	except Exception as e:
		pytest.fail(f"Database connection failed: {e}")


if __name__ == "__main__":
	test_database_connection()
