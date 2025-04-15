from .club_endpoints import router as club_router
from .course_endpoints import router as course_router
from .instructor_endpoints import router as instructor_router
from .student_endpoints import router as student_router

routers = [club_router, course_router, instructor_router, student_router]