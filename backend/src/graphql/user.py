import strawberry
from strawberry.fastapi import GraphQLRouter

from src.models.user import User

fake_db = {
	"1": User(
		id=1,
		first_name="user1",
		last_name="user1_lastname",
		username="user1_username",
		password="user1_password",
	),
	"2": User(
		id=2,
		first_name="user2",
		last_name="user2_lastname",
		username="user2_username",
		password="user2_password",
	),
}


@strawberry.type
class UserQuery:
	@strawberry.field
	def get_user(self, id: str) -> User:
		return fake_db[id]


user_schema = GraphQLRouter(strawberry.Schema(query=UserQuery), path="/users")
