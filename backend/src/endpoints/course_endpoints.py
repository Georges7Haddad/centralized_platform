from fastapi import HTTPException
from sqlmodel import Session, select

from src.endpoints.start_session import get_session_dependency
from src.models.course_model import (
	Course,
	CourseBase,
	CourseCreate,
	CourseUpdate,
)
from src.models.instructor_model import InstructorCourseLink
from src.models.student_model import StudentCourseLink
from src.server import app


# create a course
@app.post("/courses/", response_model=CourseBase)
def create_course(
	course: CourseCreate, session: Session = get_session_dependency
):
	with session:
		db_course = Course.model_validate(course)
		session.add(db_course)
		session.commit()
		session.refresh(db_course)
		return db_course


# read all courses data
@app.get("/courses/", response_model=list[CourseBase])
def read_courses(session: Session = get_session_dependency):
	with session:
		courses = session.exec(select(Course)).all()
		return courses


# read one course
@app.get("/courses/{course_crn}", response_model=CourseBase)
def read_course(course_crn: int, session: Session = get_session_dependency):
	with session:
		course = session.get(Course, course_crn)
		if not course:
			raise HTTPException(status_code=404, detail="Course not found")
		return course


# getting students for a course
@app.get("/students-in-course/{course_crn}")
def read_course_students(
	course_crn: int, session: Session = get_session_dependency
):
	with session:
		course_students = session.exec(
			select(StudentCourseLink).where(
				StudentCourseLink.course_crn == course_crn
			)
		).all()
		if not course_students:
			raise HTTPException(status_code=404, detail="Course not found")
		return course_students


# getting all instructors for a course
@app.get("/instructors-in-course/{course_crn}")
def read_course_instructors(
	course_crn: int, session: Session = get_session_dependency
):
	with session:
		course_instructors = session.exec(
			select(InstructorCourseLink).where(
				InstructorCourseLink.course_crn == course_crn
			)
		).all()
		if not course_instructors:
			raise HTTPException(status_code=404, detail="Course not found")
		return course_instructors


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
