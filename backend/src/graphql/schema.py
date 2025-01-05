import strawberry

from .answer import AnswerMutation, AnswerQuery
from .course import CourseMutation, CourseQuery
from .question import QuestionMutation, QuestionQuery
from .user import UserQuery


# Combine all the queries and mutations into one overarching query and mutation
# this will be benificial in the frontend we can just call /graphql
@strawberry.type
class CombinedQuery(
	AnswerQuery,
	CourseQuery,
	QuestionQuery,
	UserQuery,
):
	"""Inherit fields from all query classes."""


@strawberry.type
class CombinedMutation(
	AnswerMutation,
	CourseMutation,
	QuestionMutation,
):
	"""Inherit mutation fields from all mutation classes."""


# Now build one overarching schema
schema = strawberry.Schema(query=CombinedQuery, mutation=CombinedMutation)
