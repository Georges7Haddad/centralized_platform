from fastapi import Depends

from src.database.database import get_session

get_session_dependency = Depends(get_session)
