import strawberry
from strawberry.fastapi import GraphQLRouter

from src.models.answer import Answer

fake_answers = {
    "1": Answer(id=1, question_id=1, user_id=2, content="GraphQL is a query language for APIs."),
    "2": Answer(id=2, question_id=2, user_id=1, content="FastAPI is popular due to its speed and simplicity."),
}


@strawberry.type
class AnswerQuery:
    @strawberry.field
    def get_answer(self, id: str) -> Answer:
        return fake_answers[id]
    
@strawberry.type
class Mutation:
    @strawberry.mutation
    def create_answer(self, question_id: int, user_id: int, content: str) -> Answer:
        new_id = str(len(fake_answers) + 1)
        new_answer = Answer(id=int(new_id), question_id=question_id, user_id=user_id, content=content)
        fake_answers[new_id] = new_answer
        return new_answer
    

answer_schema = GraphQLRouter(strawberry.Schema(query=AnswerQuery, mutation=Mutation), path="/answers")
