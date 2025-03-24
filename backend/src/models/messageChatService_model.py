from typing import Annotated

from sqlmodel import Field, SQLModel

'''Message
Sender (string id), 
Receiver (string id), 
message_id (int id), 
Content (string), 
Timestamp (date), 
read (bool), 
deleted (bool)
'''

class MessageBase(SQLModel):
    sender: Annotated[str, Field(min_length=3, max_length=100)]
    receiver: Annotated[str, Field(min_length=3, max_length=100)]
    content: str
    timestamp: str
    read: bool
    deleted: bool

class Message(MessageBase, table=True):
    message_id: int = Field(primary_key=True)

class MessageCreate(MessageBase):
    pass


