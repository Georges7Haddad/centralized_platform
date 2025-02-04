from sqlmodel import Field, SQLModel


# Base user model to inherit from
class CourseBase(SQLModel):
	crn: int
	name: str = Field(index=True)
	professor: str
	time: str
	capacity: int
	start_date: str
	end_date: str


# User create model (for data creation)
class CourseCreate(CourseBase):
	pass


# User public model (for data reading)
class CoursePublic(CourseBase):
	pass


# User model to update data
class CourseUpdate(SQLModel):
	name: str | None = None
	professor: str | None = None
	time: str | None = None
	capacity: int | None = None
	start_date: str | None = None
	end_date: str | None = None
