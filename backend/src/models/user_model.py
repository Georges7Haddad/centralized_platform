from sqlmodel import Field, SQLModel


# Base user model to inherit from
class UserBase(SQLModel):
	id: int
	name: str = Field(index=True)
	faculty: str
	major: str
	email: str


# User create model (for data creation)
class UserCreate(UserBase):
	pass


# User public model (for data reading)
class UserPublic(UserBase):
	pass


# User model to update data
class UserUpdate(SQLModel):
	name: str | None = None
	faculty: str | None = None
	major: str | None = None
	email: str | None = None
