'''from typing import List
from sqlmodel import Field, Relationship, SQLModel
from club_model import ClubBase

class Club(ClubBase, table=True):
    id= int = Field(primary_key=True)
    name=str
    abbreviated_name=str
    description=str
    email=str

class ClubPublic(Club):
    pass'''