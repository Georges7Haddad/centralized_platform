from fastapi import HTTPException
from sqlmodel import Session, select
from src.endpoints.start_session import get_session_dependency
from src.models.course_model import Course
from src.models.student_model import (
	Student,
	StudentBase,
	StudentCourseLink,
	StudentCreate,
	StudentUpdate,
)
from src.server import app


# create a student
@app.post("/students/", response_model=StudentBase)
def create_student(
	student: StudentCreate, session: Session = get_session_dependency
):
	with session:
		db_student = Student.model_validate(student)
		session.add(db_student)
		session.commit()
		session.refresh(db_student)
		return db_student


# read all students data
@app.get("/students/", response_model=list[StudentBase])
def read_students(session: Session = get_session_dependency):
	with session:
		students = session.exec(select(Student)).all()
		return students


# read one student
@app.get("/students/{student_id}", response_model=StudentBase)
def read_student(student_id: int, session: Session = get_session_dependency):
	with session:
		student = session.get(Student, student_id)
		if not student:
			raise HTTPException(status_code=404, detail="Student not found")
		return student


# register student in course
@app.post("/students/{student_id}/register_course/{course_crn}")
def register_student_to_course(
	student_id: int, course_crn: int, session: Session = get_session_dependency
):
	with session:
		student = session.get(Student, student_id)
		course = session.get(Course, course_crn)
		if not student:
			raise HTTPException(status_code=404, detail="Student not found")
		if not course:
			raise HTTPException(status_code=404, detail="Course not found")
		link = StudentCourseLink(student_id=student_id, course_crn=course_crn)
		session.add(link)
		session.commit()
		return {"message": "Student added to course"}


# get all courses for a student
@app.get("/courses-for-student/{student_id}")
def read_student_courses(
	student_id: int, session: Session = get_session_dependency
):
	with session:
		statement = select(StudentCourseLink).where(
			StudentCourseLink.student_id == student_id
		)
		course_crns = session.exec(statement).all()
		if not course_crns:
			raise HTTPException(
				status_code=404, detail="No courses found for this student."
			)
		return course_crns


# update a student
@app.patch("/students/{student_id}", response_model=StudentBase)
def update_student(
	student_id: int,
	student: StudentUpdate,
	session: Session = get_session_dependency,
):
	with session:
		db_student = session.get(Student, student_id)
		if not db_student:
			raise HTTPException(status_code=404, detail="Student not found")
		student_data = student.model_dump(exclude_unset=True)
		db_student.sqlmodel_update(student_data)
		session.add(db_student)
		session.commit()
		session.refresh(db_student)
		return db_student


# delete a student
@app.delete("/students/{student_id}")
def delete_student(student_id: int, session: Session = get_session_dependency):
	with session:
		student = session.get(Student, student_id)
		if not student:
			raise HTTPException(status_code=404, detail="Student not found")

		session.query(StudentCourseLink).filter_by(
			student_id=student_id
		).delete()

		session.delete(student)
		session.commit()

		return {"ok": True}
