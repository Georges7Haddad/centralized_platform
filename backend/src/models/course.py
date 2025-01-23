import strawberry
from user import Student

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
    students: list["Student"]  
