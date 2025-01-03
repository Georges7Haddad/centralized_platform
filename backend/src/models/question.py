import strawberry

@strawberry.type
class Question:
	id: int
	user_id: int
	title: str
	content: str