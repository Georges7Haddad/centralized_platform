import os
import sys

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from course_model import CourseCreate, CoursePublic
from fastapi import Depends, HTTPException
from sqlmodel import Session, select
from tables import Course, User, UserCourseLink, UserCourseModel
from user_model import UserCreate, UserPublic

from database.database import create_db_and_tables, get_session
from server import app

get_session_dependency = Depends(get_session)


# create tables
@app.on_event("startup")
def on_startup():
	create_db_and_tables()


# create a user
@app.post("/users/", response_model=UserPublic)
def create_user(user: UserCreate, session: Session = get_session_dependency):
	with session:
		db_user = User.model_validate(user)
		session.add(db_user)
		session.commit()
		session.refresh(db_user)
		return db_user


# read all users data
@app.get("/users/", response_model=list[UserPublic])
def read_users(session: Session = get_session_dependency):
	with session:
		users = session.exec(select(User)).all()
		return users


# read one user
@app.get("/users/{user_id}", response_model=UserPublic)
def read_user(user_id: int, session: Session = get_session_dependency):
	with session:
		user = session.get(User, user_id)
		if not user:
			raise HTTPException(status_code=404, detail="User not found")
		return user


# create a course
@app.post("/courses/", response_model=CoursePublic)
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
@app.get("/courses/", response_model=list[CoursePublic])
def read_courses(session: Session = get_session_dependency):
	with session:
		courses = session.exec(select(Course)).all()
		return courses


# read one course
@app.get("/courses/{course_crn}", response_model=CoursePublic)
def read_course(course_crn: int, session: Session = get_session_dependency):
	with session:
		course = session.get(Course, course_crn)
		if not course:
			raise HTTPException(status_code=404, detail="Course not found")
		return course


# register user in course
@app.post("/user/{user_id}/register_course/{course_crn}")
def register_user_to_course(
	user_id: int, course_crn: int, session: Session = get_session_dependency
):
	with session:
		user = session.get(User, user_id)
		course = session.get(Course, course_crn)
		if not user:
			raise HTTPException(status_code=404, detail="User not found")
		if not course:
			raise HTTPException(status_code=404, detail="Course not found")
		link = UserCourseLink(user_id=user_id, course_crn=course_crn)
		session.add(link)
		session.commit()
		return {"message": "User added to course"}


# get all courses for specific user
@app.get("/users-courses/{user_id}", response_model=list[UserCourseModel])
def read_user_courses(user_id: int, session: Session = get_session_dependency):
	with session:
		user_courses = session.exec(
			select(UserCourseLink).where(UserCourseLink.user_id == user_id)
		).all()
		if not user_courses:
			raise HTTPException(status_code=404, detail="User not found")
		return user_courses


# get all users for specific course
@app.get("/users-courses/{course_crn}", response_model=list[UserCourseModel])
def read_course_users(
	course_crn: int, session: Session = get_session_dependency
):
	with session:
		course_users = session.exec(
			select(UserCourseLink).where(
				UserCourseLink.course_crn == course_crn
			)
		).all()
		if not course_users:
			raise HTTPException(status_code=404, detail="Course not found")
		return course_users
