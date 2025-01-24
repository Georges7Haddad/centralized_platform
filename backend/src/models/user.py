import strawberry
from typing import TYPE_CHECKING
if TYPE_CHECKING:
    from course import Course

@strawberry.type
class User:
    id: str
    first_name: str
    last_name: str
    faculty: str
    major: str
    email: str

@strawberry.type
class Professor(User):
    office_hours: str
    courses: list["Course"]  

@strawberry.type
class Student(User):
    courses: list["Course"] 
