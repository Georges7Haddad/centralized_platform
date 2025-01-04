import strawberry


@strawberry.type
class User:
	id: int
	first_name: str
	last_name: str
	username: str
	password: str
