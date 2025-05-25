from typing import Annotated

from sqlmodel import Field, SQLModel


class MessageBase(SQLModel):
    sender: Annotated[str, Field(min_length=3, max_length=100)]
    receiver: Annotated[str, Field(min_length=3, max_length=100)]
    message_id: int = Field(primary_key=True)
    content: str
    timestamp: str
    read: bool
    deleted: bool


class Message(MessageBase, table=True):
    pass


class MessageCreate(MessageBase):
    pass
