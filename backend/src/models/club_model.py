from sqlmodel import Field, SQLModel

class ClubBase(SQLModel):
    name: str
    abbreviated_name: str
    description: str
    email: str 

class Club(ClubBase, table=True):
	id: int = Field(default=None, primary_key=True)

class ClubUpdate(ClubBase):
    name: str | None = None
    abbreviated_name: str | None = None
    description: str | None = None
    email: str | None = None

class ClubCreate(ClubBase):
    pass