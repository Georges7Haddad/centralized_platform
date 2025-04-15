from datetime import datetime
from typing import Optional
from sqlmodel import SQLModel, Field, Relationship
#from backend.src.models.user_model import UserBase

class Chat(SQLModel, table=True):
    user_id: int = Field(foreign_key="user.id", primary_key=True)
    chat_id: str = Field(primary_key=True) 
    last_message_id: int = None
    last_updated: datetime = Field(default_factory=datetime.utcnow)

    # Relationships
    user_chats: Optional["UserBase"] = Relationship(back_populates="chats")