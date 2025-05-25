from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class LeaveGroupRequest(_message.Message):
    __slots__ = ("user_id", "group_id")
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    GROUP_ID_FIELD_NUMBER: _ClassVar[int]
    user_id: str
    group_id: str
    def __init__(
        self, user_id: _Optional[str] = ..., group_id: _Optional[str] = ...
    ) -> None: ...

class LeaveGroupResponse(_message.Message):
    __slots__ = ("status_code",)
    STATUS_CODE_FIELD_NUMBER: _ClassVar[int]
    status_code: int
    def __init__(self, status_code: _Optional[int] = ...) -> None: ...
