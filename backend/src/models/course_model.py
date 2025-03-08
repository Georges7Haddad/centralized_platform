from datetime import time
from enum import Enum

from sqlmodel import Field, SQLModel


class Day(str, Enum):
	MONDAY = "M"
	WEDNESDAY = "W"
	FRIDAY = "F"
	TUESDAY = "T"
	THURSDAY = "R"
	SATURDAY = "S"
	MWF = "MWF"
	TR = "TR"
	MW = "MW"


# Base course model to inherit from
class CourseBase(SQLModel):
	course_title: str
	crn: int
	associated_term: str
	credits: str
	capacity: str
	starts_at: time
	ends_at: time
	days: Day
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
	starts_at: time | None = None
	ends_at: time | None = None
	days: Day | None = None
	where: str | None = None
	schedule_type: str | None = None
	instructor: str | None = None
	term_code: str | None = None
	term_label: str | None = None


# Courses Table
class Course(CourseBase, table=True):
	crn: int = Field(primary_key=True)
