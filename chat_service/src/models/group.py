from typing import Optional, List
from datetime import datetime
from sqlmodel import Field, SQLModel, Relationship
from backend.src.models.user_model import UserBase

class Group(SQLModel, table=True):
    id: int = Field(primary_key=True)
    name: str
    description: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
    created_by_id: int = Field(foreign_key="user.id")

    # Relationships
    created_by: Optional["UserBase"] = Relationship(
        back_populates="created_groups",
        sa_relationship_kwargs={"foreign_keys": "[Group.created_by_id]"}
    )
    members: List["GroupMember"] = Relationship(back_populates="group")


class GroupMember(SQLModel, table=True):
    group_id: int = Field(foreign_key="group.id", primary_key=True)
    user_id: int = Field(foreign_key="user.id", primary_key=True)
    role: str = Field(default="member")
    in_group: bool = Field(default=True)

    # Relationships
    group: Optional[Group] = Relationship(back_populates="members")
    user: Optional["UserBase"] = Relationship(back_populates="group_memberships")