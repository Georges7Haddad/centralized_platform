import strawberry


@strawberry.type
class Course:
	id: int
	name: str
	timing: str
	description: str
