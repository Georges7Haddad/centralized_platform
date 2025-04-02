from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class MessageType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    MESSAGE_TEXT: _ClassVar[MessageType]
    MESSAGE_IMAGE: _ClassVar[MessageType]
    MESSAGE_VIDEO: _ClassVar[MessageType]
MESSAGE_TEXT: MessageType
MESSAGE_IMAGE: MessageType
MESSAGE_VIDEO: MessageType

class SendMessageRequest(_message.Message):
    __slots__ = ("sender", "receiver", "content", "type", "message_id")
    SENDER_FIELD_NUMBER: _ClassVar[int]
    RECEIVER_FIELD_NUMBER: _ClassVar[int]
    CONTENT_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_ID_FIELD_NUMBER: _ClassVar[int]
    sender: str
    receiver: str
    content: str
    type: MessageType
    message_id: str
    def __init__(self, sender: _Optional[str] = ..., receiver: _Optional[str] = ..., content: _Optional[str] = ..., type: _Optional[_Union[MessageType, str]] = ..., message_id: _Optional[str] = ...) -> None: ...
