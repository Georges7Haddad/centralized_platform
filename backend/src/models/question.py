import strawberry


@strawberry.type
class Question:
	id: int
	course_id: int
	user_id: int
	title: str
	content: str
