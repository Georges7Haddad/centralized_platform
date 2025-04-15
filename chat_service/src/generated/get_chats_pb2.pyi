from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Chat(_message.Message):
    __slots__ = ("user_id", "chat_id", "last_message")
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    CHAT_ID_FIELD_NUMBER: _ClassVar[int]
    LAST_MESSAGE_FIELD_NUMBER: _ClassVar[int]
    user_id: str
    chat_id: str
    last_message: str
    def __init__(self, user_id: _Optional[str] = ..., chat_id: _Optional[str] = ..., last_message: _Optional[str] = ...) -> None: ...

class GetChatRequest(_message.Message):
    __slots__ = ("user_id", "limit", "offset")
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    LIMIT_FIELD_NUMBER: _ClassVar[int]
    OFFSET_FIELD_NUMBER: _ClassVar[int]
    user_id: str
    limit: int
    offset: int
    def __init__(self, user_id: _Optional[str] = ..., limit: _Optional[int] = ..., offset: _Optional[int] = ...) -> None: ...

class GetChatResponse(_message.Message):
    __slots__ = ("status_code", "chats")
    STATUS_CODE_FIELD_NUMBER: _ClassVar[int]
    CHATS_FIELD_NUMBER: _ClassVar[int]
    status_code: int
    chats: _containers.RepeatedCompositeFieldContainer[Chat]
    def __init__(self, status_code: _Optional[int] = ..., chats: _Optional[_Iterable[_Union[Chat, _Mapping]]] = ...) -> None: ...
