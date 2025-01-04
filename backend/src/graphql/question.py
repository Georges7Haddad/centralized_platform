import strawberry
from strawberry.fastapi import GraphQLRouter

from src.models.question import Question

fake_questions = {
	"1": Question(
		id=1,
		user_id=1,
		course_id=1,
		title="What is GraphQL?",
		content="How does GraphQL work?",
	),
	"2": Question(
		id=2,
		user_id=2,
		course_id=2,
		title="What is FastAPI?",
		content="Why is FastAPI popular?",
	),
}


@strawberry.type
class QuestionQuery:
	@strawberry.field
	def get_questions(self, course_id: int) -> list[Question]:
		return [
			question
			for question in fake_questions.values()
			if question.course_id == course_id
		]


@strawberry.type
class QuestionMutation:
	@strawberry.mutation
	def create_question(
		self, user_id: int, course_id: int, title: str, content: str
	) -> Question:
		new_id = str(len(fake_questions) + 1)
		new_question = Question(
			id=int(new_id),
			user_id=user_id,
			course_id=course_id,
			title=title,
			content=content,
		)
		fake_questions[new_id] = new_question
		return new_question


question_schema = GraphQLRouter(
	strawberry.Schema(query=QuestionQuery, mutation=QuestionMutation),
	path="/questions",
)
