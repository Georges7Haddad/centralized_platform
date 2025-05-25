from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class DeleteMessageRequest(_message.Message):
    __slots__ = ("message_id", "deletor_id")
    MESSAGE_ID_FIELD_NUMBER: _ClassVar[int]
    DELETOR_ID_FIELD_NUMBER: _ClassVar[int]
    message_id: str
    deletor_id: str
    def __init__(
        self, message_id: _Optional[str] = ..., deletor_id: _Optional[str] = ...
    ) -> None: ...

class DeleteMessageResponse(_message.Message):
    __slots__ = ("status_code",)
    STATUS_CODE_FIELD_NUMBER: _ClassVar[int]
    status_code: int
    def __init__(self, status_code: _Optional[int] = ...) -> None: ...
