from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class CreateGroupRequest(_message.Message):
    __slots__ = ("group_name", "creator_id", "member_ids")
    GROUP_NAME_FIELD_NUMBER: _ClassVar[int]
    CREATOR_ID_FIELD_NUMBER: _ClassVar[int]
    MEMBER_IDS_FIELD_NUMBER: _ClassVar[int]
    group_name: str
    creator_id: str
    member_ids: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, group_name: _Optional[str] = ..., creator_id: _Optional[str] = ..., member_ids: _Optional[_Iterable[str]] = ...) -> None: ...

class GroupResponse(_message.Message):
    __slots__ = ("status_code", "message")
    STATUS_CODE_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    status_code: int
    message: str
    def __init__(self, status_code: _Optional[int] = ..., message: _Optional[str] = ...) -> None: ...

class AddMembersToGroupRequest(_message.Message):
    __slots__ = ("group_id", "adder_id", "member_ids")
    GROUP_ID_FIELD_NUMBER: _ClassVar[int]
    ADDER_ID_FIELD_NUMBER: _ClassVar[int]
    MEMBER_IDS_FIELD_NUMBER: _ClassVar[int]
    group_id: str
    adder_id: str
    member_ids: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, group_id: _Optional[str] = ..., adder_id: _Optional[str] = ..., member_ids: _Optional[_Iterable[str]] = ...) -> None: ...
