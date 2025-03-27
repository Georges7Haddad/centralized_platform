from fastapi import Depends, HTTPException
from sqlmodel import Session, select

from src.database.database import get_session
from src.models.course_model import (
	Course,
	CourseBase,
	CourseCreate,
	CourseUpdate,
)
from src.models.instructor_model import Instructor, InstructorCourseLink
from src.models.student_model import Student, StudentCourseLink
from src.server import app

get_session_dependency = Depends(get_session)


# create a course
@app.post("/courses/", response_model=CourseBase)
def create_course(
	course: CourseCreate, session: Session = get_session_dependency
):
	db_course = Course.model_validate(course)
	session.add(db_course)
	session.commit()
	session.refresh(db_course)
	return db_course


# read one course
@app.get("/courses/{course_crn}", response_model=CourseBase)
def read_course(course_crn: int, session: Session = get_session_dependency):
	course = session.get(Course, course_crn)
	if not course:
		raise HTTPException(status_code=404, detail="Course not found")
	return course


# getting students for a course
@app.get("/courses/{course_crn}/students")
def read_course_students(
	course_crn: int, session: Session = get_session_dependency
):
	statement = (
		select(Student)
		.join(
			StudentCourseLink,
			StudentCourseLink.student_id == Student.id,
		)
		.where(InstructorCourseLink.course_crn == course_crn)
	)
	students = session.exec(statement).all()
	if not students:
		raise HTTPException(
			status_code=404, detail="No students found for this course."
		)
	return students


# getting all instructors for a course
@app.get("/courses/{course_crn}/instructors")
def read_course_instructors(
	course_crn: int, session: Session = get_session_dependency
):
	statement = (
		select(Instructor)
		.join(
			InstructorCourseLink,
			InstructorCourseLink.instructor_id == Instructor.id,
		)
		.where(InstructorCourseLink.course_crn == course_crn)
	)
	instructors = session.exec(statement).all()
	if not instructors:
		raise HTTPException(
			status_code=404, detail="No instructors found for this course."
		)
	return instructors


# update a course
@app.patch("/courses/{course_crn}", response_model=CourseBase)
def update_course(
	course_crn: int,
	course: CourseUpdate,
	session: Session = get_session_dependency,
):
	with session:
		db_course = session.get(Course, course_crn)
		if not db_course:
			raise HTTPException(status_code=404, detail="Course not found")
		course_data = course.model_dump(exclude_unset=True)
		db_course.sqlmodel_update(course_data)
		session.add(db_course)
		session.commit()
		session.refresh(db_course)
		return db_course


# delete a course
@app.delete("/courses/{course_crn}")
def delete_course(course_crn: int, session: Session = get_session_dependency):
	with session:
		course = session.get(Course, course_crn)
		if not course:
			raise HTTPException(status_code=404, detail="Course not found")

		session.query(InstructorCourseLink).filter_by(
			course_crn=course_crn
		).delete()
		session.query(StudentCourseLink).filter_by(
			course_crn=course_crn
		).delete()

		session.delete(course)
		session.commit()

		return {"ok": True}
