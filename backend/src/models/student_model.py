from sqlmodel import Field, SQLModel

from src.models.user_model import UserBase, UserCreate, UserUpdate


# Base student model to inherit from
class StudentBase(UserBase):
	gpa: str


# Student create model (for data creation)
class StudentCreate(StudentBase, UserCreate):
	pass


# Student model to update data
class StudentUpdate(UserUpdate):
	gpa: str | None = None


# Create a table
class Student(StudentBase, table=True):
	id: int = Field(primary_key=True)


# Junction Table - Student & Course
class StudentCourseLink(SQLModel, table=True):
	student_id: int = Field(foreign_key="student.id", primary_key=True)
	course_crn: int = Field(foreign_key="course.crn", primary_key=True)
