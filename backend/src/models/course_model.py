from sqlmodel import Field, SQLModel


# Base course model to inherit from
class CourseBase(SQLModel):
	course_title: str
	crn: int
	associated_term: str
	credits: str
	capacity: str
	time: str
	days: str
	where: str
	schedule_type: str
	term_code: str
	term_label: str


# Course create model (for data creation)
class CourseCreate(CourseBase):
	pass


# Course model to update data
class CourseUpdate(SQLModel):
	course_title: str | None = None
	associated_term: str | None = None
	credits: str | None = None
	capacity: str | None = None
	time: str | None = None
	days: str | None = None
	where: str | None = None
	schedule_type: str | None = None
	instructor: str | None = None
	term_code: str | None = None
	term_label: str | None = None


# Courses Table
class Course(CourseBase, table=True):
	crn: int = Field(primary_key=True)
