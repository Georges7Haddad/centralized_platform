from sqlmodel import Field, SQLModel


# Base course model to inherit from
class CourseBase(SQLModel):
	crn: int
	name: str = Field(index=True)
	professor: str
	time: str
	capacity: int
	start_date: str
	end_date: str


# Course create model (for data creation)
class CourseCreate(CourseBase):
	pass


# Course public model (for data reading)
class CoursePublic(CourseBase):
	pass


# Course model to update data
class CourseUpdate(SQLModel):
	name: str | None = None
	professor: str | None = None
	time: str | None = None
	capacity: int | None = None
	start_date: str | None = None
	end_date: str | None = None
