'''from sqlmodel import Field, SQLModel

class ClubBase(SQLModel):
    id: int
    name: str
    abbreviated_name: str
    description: str
    email: str 

class ClubUpdate(ClubBase):
    name: str | None = None
    abbreviated_name: str | None = None
    description: str | None = None
    email: str | None = None'''