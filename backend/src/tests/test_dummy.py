from fastapi.testclient import TestClient

from src.server import app

client = TestClient(app)


def test_read_main():
	response = client.get("/")
	assert response.status_code == 200
	assert response.json() == {"Hello": "World from FASTAPI"}
