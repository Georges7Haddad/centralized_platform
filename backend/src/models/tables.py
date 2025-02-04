from typing import Optional

from course_model import CourseBase
from sqlmodel import Field, Relationship, SQLModel
from user_model import UserBase


class UserCourseModel(SQLModel):
	user_id: Optional[int] = None
	course_crn: Optional[int] = None


# Junction Table
class UserCourseLink(UserCourseModel, table=True):
	user_id: int = Field(foreign_key="user.id", primary_key=True)
	course_crn: int = Field(foreign_key="course.crn", primary_key=True)


# User Table
class User(UserBase, table=True):
	id: int = Field(primary_key=True)
	courses: list["Course"] = Relationship(
		back_populates="users", link_model=UserCourseLink
	)


# Courses Table
class Course(CourseBase, table=True):
	crn: int = Field(primary_key=True)
	users: list[User] = Relationship(
		back_populates="courses", link_model=UserCourseLink
	)
