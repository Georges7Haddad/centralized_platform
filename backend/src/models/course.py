import strawberry
from typing import List
from user import Student
import time


# Course Class
@strawberry.type
class Course:
	crn: int
	professor: str
	capacity: int
	start_time: time
	end_time: time
	department: str
	number: int
	location: str
	students: List[Student]