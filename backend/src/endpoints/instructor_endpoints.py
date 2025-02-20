from fastapi import HTTPException
from sqlmodel import Session, select
from src.endpoints.start_session import get_session_dependency
from src.models.course_model import Course
from src.models.instructor_model import (
	Instructor,
	InstructorBase,
	InstructorCourseLink,
	InstructorCreate,
	InstructorUpdate,
)
from src.server import app


# create an instructor
@app.post("/instructors/", response_model=InstructorBase)
def create_instructor(
	instructor: InstructorCreate, session: Session = get_session_dependency
):
	with session:
		db_instructor = Instructor.model_validate(instructor)
		session.add(db_instructor)
		session.commit()
		session.refresh(db_instructor)
		return db_instructor


# read all instructors data
@app.get("/instructors/", response_model=list[InstructorBase])
def read_instructors(session: Session = get_session_dependency):
	with session:
		instructors = session.exec(select(Instructor)).all()
		return instructors


# read one instructor
@app.get("/instructors/{instructor_id}", response_model=InstructorBase)
def read_instructor(
	instructor_id: int, session: Session = get_session_dependency
):
	with session:
		instructor = session.get(Instructor, instructor_id)
		if not instructor:
			raise HTTPException(status_code=404, detail="Instructor not found")
		return instructor


# assign instructor to course
@app.post("/instructors/{instructor_id}/register_course/{course_crn}")
def assign_instructor_to_course(
	instructor_id: int,
	course_crn: int,
	session: Session = get_session_dependency,
):
	with session:
		instructor = session.get(Instructor, instructor_id)
		course = session.get(Course, course_crn)
		if not instructor:
			raise HTTPException(status_code=404, detail="Instructor not found")
		if not course:
			raise HTTPException(status_code=404, detail="Course not found")
		link = InstructorCourseLink(
			instructor_id=instructor_id, course_crn=course_crn
		)
		session.add(link)
		session.commit()
		return {"message": "Instructor added to course"}


# get all courses for an instructor
@app.get("/instructors/{instructor_id}/courses")
def read_instructor_courses(
	instructor_id: int, session: Session = get_session_dependency
):
	with session:
		statement = select(InstructorCourseLink).where(
			InstructorCourseLink.instructor_id == instructor_id
		)
		course_crns = session.exec(statement).all()
		if not course_crns:
			raise HTTPException(
				status_code=404, detail="No courses found for this instructor."
			)
		return course_crns


# update instructor
@app.patch("/instructors/{instructor_id}", response_model=InstructorBase)
def update_instructor(
	instructor_id: int,
	instructor: InstructorUpdate,
	session: Session = get_session_dependency,
):
	with session:
		db_instructor = session.get(Instructor, instructor_id)
		if not db_instructor:
			raise HTTPException(status_code=404, detail="Instructor not found")
		instructor_data = instructor.model_dump(exclude_unset=True)
		db_instructor.sqlmodel_update(instructor_data)
		session.add(db_instructor)
		session.commit()
		session.refresh(db_instructor)
		return db_instructor


# delete an instructor
@app.delete("/instructors/{instructor_id}")
def delete_instructor(
	instructor_id: int, session: Session = get_session_dependency
):
	with session:
		instructor = session.get(Instructor, instructor_id)
		if not instructor:
			raise HTTPException(status_code=404, detail="Instructor not found")

		session.query(InstructorCourseLink).filter_by(
			instructor_id=instructor_id
		).delete()

		session.delete(instructor)
		session.commit()

		return {"ok": True}
