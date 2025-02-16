from sqlmodel import Field, SQLModel

from src.models.user_model import UserBase, UserCreate, UserUpdate


class StudentBase(UserBase):
	gpa: str


class StudentCreate(UserCreate):
	gpa: str


class StudentUpdate(UserUpdate):
	gpa: str | None = None


class Student(StudentBase, table=True):
	id: int = Field(primary_key=True)


# Junction Table
class StudentCourseLink(SQLModel, table=True):
	student_id: int = Field(foreign_key="student.id", primary_key=True)
	course_crn: int = Field(foreign_key="course.crn", primary_key=True)
