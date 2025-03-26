from typing import Optional, List, TYPE_CHECKING
from sqlmodel import Field, Relationship, SQLModel

if TYPE_CHECKING:
    from .group import Group, GroupMember

class UserBase(SQLModel, table=True):
    id: int = Field(primary_key=True, sa_column_kwargs={"autoincrement": True})
    first_name: str
    last_name: str
    faculty: str
    major: str
    email: str = Field(unique=True)  # Added unique constraint for email

    # Relationships
    created_groups: List["Group"] = Relationship(
        back_populates="created_by",
        sa_relationship_kwargs={"foreign_keys": "[Group.created_by_id]"}
    )
    group_memberships: List["GroupMember"] = Relationship(back_populates="user")

class UserCreate(UserBase):
    # Remove table=True since this is just for validation
    class Config:
        table = False

class UserUpdate(SQLModel):
    first_name: Optional[str] = None  # Using Optional instead of | None
    last_name: Optional[str] = None
    faculty: Optional[str] = None
    major: Optional[str] = None
    email: Optional[str] = None

    class Config:
        table = False 