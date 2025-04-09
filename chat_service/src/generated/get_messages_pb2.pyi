from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class MessageType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    MESSAGE_TEXT: _ClassVar[MessageType]
    MESSAGE_IMAGE: _ClassVar[MessageType]
    MESSAGE_VIDEO: _ClassVar[MessageType]
MESSAGE_TEXT: MessageType
MESSAGE_IMAGE: MessageType
MESSAGE_VIDEO: MessageType

class GetMessagesRequest(_message.Message):
    __slots__ = ("user_1", "user_2", "page_size", "page_number")
    USER_1_FIELD_NUMBER: _ClassVar[int]
    USER_2_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_NUMBER_FIELD_NUMBER: _ClassVar[int]
    user_1: str
    user_2: str
    page_size: int
    page_number: int
    def __init__(self, user_1: _Optional[str] = ..., user_2: _Optional[str] = ..., page_size: _Optional[int] = ..., page_number: _Optional[int] = ...) -> None: ...

class Message(_message.Message):
    __slots__ = ("message_id", "timestamp", "sender", "receiver", "content", "type", "read", "deleted")
    MESSAGE_ID_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    SENDER_FIELD_NUMBER: _ClassVar[int]
    RECEIVER_FIELD_NUMBER: _ClassVar[int]
    CONTENT_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    READ_FIELD_NUMBER: _ClassVar[int]
    DELETED_FIELD_NUMBER: _ClassVar[int]
    message_id: str
    timestamp: str
    sender: str
    receiver: str
    content: str
    type: MessageType
    read: bool
    deleted: bool
    def __init__(self, message_id: _Optional[str] = ..., timestamp: _Optional[str] = ..., sender: _Optional[str] = ..., receiver: _Optional[str] = ..., content: _Optional[str] = ..., type: _Optional[_Union[MessageType, str]] = ..., read: bool = ..., deleted: bool = ...) -> None: ...

class GetMessagesResponse(_message.Message):
    __slots__ = ("messages", "status_code")
    MESSAGES_FIELD_NUMBER: _ClassVar[int]
    STATUS_CODE_FIELD_NUMBER: _ClassVar[int]
    messages: _containers.RepeatedCompositeFieldContainer[Message]
    status_code: int
    def __init__(self, messages: _Optional[_Iterable[_Union[Message, _Mapping]]] = ..., status_code: _Optional[int] = ...) -> None: ...
