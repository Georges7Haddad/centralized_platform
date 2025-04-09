#from chat_service.src.models.chat import Chat
#from chat_service.src.models.group import Group, GroupMember
from sqlmodel import Field, Relationship, SQLModel


# Base user model to inherit from
class UserBase(SQLModel):
	id: int = Field(primary_key=True, sa_column_kwargs={"autoincrement": True})
	first_name: str
	last_name: str
	faculty: str
	major: str
	email: str

    # Relationships (strings to avoid circular import issues)
	#created_groups: list["Group"] = Relationship(back_populates="created_by")
	#group_memberships: list["GroupMember"] = Relationship(back_populates="user")
	#chats: list["Chat"] = Relationship(back_populates="user_chats")
	

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
