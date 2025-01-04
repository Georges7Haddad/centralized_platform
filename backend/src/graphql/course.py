import strawberry
from strawberry.fastapi import GraphQLRouter

from src.models.course import Course
from src.models.user_course import UserCourse

fake_courses = {
	"1": Course(
		id=1,
		name="Computer Science 101",
		description="Introduction to CS.",
		timing="10:00-10:50 MWF",
	),
	"2": Course(
		id=2,
		name="Mathematics 101",
		description="Basic mathematics.",
		timing="2:00-3:15 TR",
	),
}

fake_user_courses = [
	UserCourse(user_id=1, course_id=1),
	UserCourse(user_id=2, course_id=2),
]


@strawberry.type
class CourseQuery:
	@strawberry.field
	def get_courses(self) -> list[Course]:
		return list(fake_courses.values())

	@strawberry.field
	def get_user_courses(self, user_id: int) -> list[Course]:
		user_course_ids = [
			uc.course_id for uc in fake_user_courses if uc.user_id == user_id
		]
		return [
			course
			for course in fake_courses.values()
			if course.id in user_course_ids
		]


@strawberry.type
class CourseMutation:
	@strawberry.mutation
	def enroll_user(self, user_id: int, course_id: int) -> UserCourse:
		new_user_course = UserCourse(user_id=user_id, course_id=course_id)
		fake_user_courses.append(new_user_course)
		return new_user_course


course_schema = GraphQLRouter(
	strawberry.Schema(query=CourseQuery, mutation=CourseMutation),
	path="/courses",
)
