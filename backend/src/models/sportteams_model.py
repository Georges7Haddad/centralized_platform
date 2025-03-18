from typing import Annotated

from sqlmodel import Field, SQLModel


class SportTeamsBase(SQLModel):
    name: Annotated[str, Field(min_length=3, max_length=100)]
    abbreviated_name: Annotated[str, Field(min_length=2, max_length=10)]
    description: str
    email: Annotated[str, Field(regex="^[\w\-.]+@([\w-]+\.)+[\w-]{2,4}$")]
    
class SportTeams(SportTeamsBase, table=True):
    id: int = Field(default=None, primary_key=True)

class SportTeamsUpdate(SportTeamsBase):
    name: str
    abbreviated_name: str | None = None
    description: str | None=None
    email: str | None=None

class SportTeamsCreate(SportTeamsBase):
    pass