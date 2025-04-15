from sqlmodel import Field, SQLModel, Relationship
from typing import List



# Base user model to inherit from
class UserBase(SQLModel):
	id: int = Field(primary_key=True, sa_column_kwargs={"autoincrement": True})
	first_name: str
	last_name: str
	faculty: str
	major: str
	email: str

class User(UserBase, table=True):
    id: int = Field(default=None, primary_key=True)
    # Relationships
    created_groups: List["Group"] = Relationship(back_populates="created_by")
    group_memberships: List["GroupMember"] = Relationship(back_populates="user")
    chats: List["Chat"] = Relationship(back_populates="user_chats")

# User create model (for data creation)
class UserCreate(UserBase):
	pass


# User model to update data
class UserUpdate(SQLModel):
	first_name: str | None = None
	last_name: str | None = None
	faculty: str | None = None
	major: str | None = None
	email: str | None = None
