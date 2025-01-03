import strawberry

@strawberry.type
class Answer:
	id: int
	question_id: int
	user_id: int
	content: str