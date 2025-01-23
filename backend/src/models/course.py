import strawberry
from typing import List

@strawberry.type
class Course:
    crn: int
    professor: str
    capacity: int
    start_time: str  
    end_time: str
    department: str
    number: int
    location: str
    students: List["Student"]  
