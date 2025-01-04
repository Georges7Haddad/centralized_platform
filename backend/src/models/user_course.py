import strawberry


# this is the user_course model that creates the relationship between each user
# and the courses they are enrolled in
@strawberry.type
class UserCourse:
	user_id: int
	course_id: int
