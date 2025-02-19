from sqlmodel import SQLModel


# Base user model to inherit from
class UserBase(SQLModel):
	id: int
	first_name: str
	last_name: str
	faculty: str
	major: str
	email: str


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
