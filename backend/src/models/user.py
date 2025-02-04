import strawberry


@strawberry.type
class User:
	first_name: str
	age: int
