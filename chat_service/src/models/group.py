from typing import Annotated, Optional, List
from datetime import datetime
from backend.src.models.user_model import UserBase
from sqlmodel import Field, SQLModel, Relationship


class Group(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    description: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)

    created_by: int = Field(foreign_key="user.id")
    created_by_user: Optional[UserBase] = Relationship(back_populates="created_groups")

    members: List["GroupMember"] = Relationship(back_populates="group")


class GroupMember(SQLModel, table=True):
    group_id: int = Field(foreign_key="group.id", primary_key=True)
    user_id: int = Field(foreign_key="user.id", primary_key=True)

    role: Optional[str] = Field(default="member")
    in_group: bool = Field(default=True)

    group: Optional[Group] = Relationship(back_populates="members")
    user: Optional[User] = Relationship(back_populates="group_memberships")