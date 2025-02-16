from sqlmodel import Field, SQLModel

from src.models.user_model import UserBase, UserUpdate


# Base user model to inherit from
class InstructorBase(UserBase):
	office_hours: str
	position: str


# User create model (for data creation)
class InstructorCreate(InstructorBase):
	pass


# User model to update data
class InstructorUpdate(UserUpdate):
	office_hours: str | None = None
	position: str | None = None


# User Table
class Instructor(InstructorBase, table=True):
	id: int = Field(primary_key=True)


# Junction Table
class InstructorCourseLink(SQLModel, table=True):
	instructor_id: int = Field(foreign_key="instructor.id", primary_key=True)
	course_crn: int = Field(foreign_key="course.crn", primary_key=True)
