import strawberry
from strawberry.fastapi import GraphQLRouter

from src.models.user import User

fake_db = {
	'1': User(first_name='aj', age=12),
	'2': User(first_name='lap', age=7),
}


@strawberry.type
class UserQuery:
	@strawberry.field
	def get_user(self, id: str) -> User:
		return fake_db[id]


user_schema = GraphQLRouter(strawberry.Schema(query=UserQuery), path='/users')
