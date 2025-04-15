from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session

from src.database.database import get_session
from src.models.club_model import (
	Club,
	ClubBase,
	ClubCreate,
	ClubUpdate,
)

router = APIRouter()

get_session_dependency = Depends(get_session)

# create a club
@router.post("/clubs/", response_model=ClubBase)
def create_club(club: ClubCreate, session: Session = get_session_dependency):
	with session:
		db_club = Club.model_validate(club)
		session.add(db_club)
		session.commit()
		session.refresh(db_club)
		return db_club


# read one club info
@router.get("/clubs/{club_id}", response_model=ClubBase)
def read_club(club_id: int, session: Session = get_session_dependency):
	with session:
		club = session.get(Club, club_id)
		if not club:
			raise HTTPException(status_code=404, detail="Club not found")
		return club


# update a club
@router.patch("/clubs/{club_id}", response_model=ClubBase)
def update_club(
	club_id: int, club: ClubUpdate, session: Session = get_session_dependency
):
	with session:
		club_db = session.get(Club, club_id)
		if not club_db:
			raise HTTPException(status_code=404, detail="Club not found")
		club_data = club.model_dump(exclude_unset=True)
		club_db.sqlmodel_update(club_data)
		session.add(club_db)
		session.commit()
		session.refresh(club_db)
		return club_db


# delete a club
@router.delete("/clubs/{club_id}")
def delete_club(club_id: int, session: Session = get_session_dependency):
	with session:
		club = session.get(Club, club_id)
		if not club:
			raise HTTPException(status_code=404, detail="Club not found")
		session.delete(club)
		session.commit()
		return {"ok": True}