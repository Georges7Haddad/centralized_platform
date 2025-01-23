import strawberry

@strawberry.type
class User:
    id: str
    first_name: str
    last_name: str
    faculty: str
    major: str
    email: str

# Professor Class
@strawberry.type
class Professor(User):
    office_hours: str
    courses: list["Course"]  

# Student Class
@strawberry.type
class Student(User):
    courses: list["Course"] 