import strawberry
from strawberry.fastapi import GraphQLRouter
from src.models.user import User

fake_db = {
    "1": User(
        id="1",
        first_name="aj",
        last_name="aa",
        faculty="FAS",
        major="CMPS",
        email="aj",
    ),
    "2": User(
        id="2",
        first_name="lap",
        last_name="sas",
        faculty="OSB",
        major="BUSS",
        email="lap",
    ),
}


@strawberry.type
class UserQuery:
	@strawberry.field
	def get_user(self, id: str) -> User:
		return fake_db[id]


user_schema = GraphQLRouter(strawberry.Schema(query=UserQuery), path="/users")
