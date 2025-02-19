from sqlmodel import Field, SQLModel

from src.models.user_model import UserBase, UserCreate, UserUpdate


# Base Instructor model to inherit from
class InstructorBase(UserBase):
	office_hours: str
	position: str


# Instructor create model (for data creation)
class InstructorCreate(InstructorBase, UserCreate):
	pass


# Instructor model to update data
class InstructorUpdate(UserUpdate):
	office_hours: str | None = None
	position: str | None = None


# Instructor Table
class Instructor(InstructorBase, table=True):
	id: int = Field(primary_key=True)


# Junction Table - Instructor & Course
class InstructorCourseLink(SQLModel, table=True):
	instructor_id: int = Field(foreign_key="instructor.id", primary_key=True)
	course_crn: int = Field(foreign_key="course.crn", primary_key=True)
