# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: group_service.proto
# Protobuf Python Version: 5.29.0
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import runtime_version as _runtime_version
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
_runtime_version.ValidateProtobufRuntimeVersion(
    _runtime_version.Domain.PUBLIC,
    5,
    29,
    0,
    '',
    'group_service.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x13group_service.proto\x12\tgroupchat\"P\n\x12\x43reateGroupRequest\x12\x12\n\ngroup_name\x18\x01 \x01(\t\x12\x12\n\ncreator_id\x18\x02 \x01(\t\x12\x12\n\nmember_ids\x18\x03 \x03(\t\"5\n\rGroupResponse\x12\x13\n\x0bstatus_code\x18\x01 \x01(\x05\x12\x0f\n\x07message\x18\x02 \x01(\t\"R\n\x18\x41\x64\x64MembersToGroupRequest\x12\x10\n\x08group_id\x18\x01 \x01(\t\x12\x10\n\x08\x61\x64\x64\x65r_id\x18\x02 \x01(\t\x12\x12\n\nmember_ids\x18\x03 \x03(\t2\xaa\x01\n\x0cGroupService\x12\x46\n\x0b\x43reateGroup\x12\x1d.groupchat.CreateGroupRequest\x1a\x18.groupchat.GroupResponse\x12R\n\x11\x41\x64\x64MembersToGroup\x12#.groupchat.AddMembersToGroupRequest\x1a\x18.groupchat.GroupResponseb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'group_service_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  DESCRIPTOR._loaded_options = None
  _globals['_CREATEGROUPREQUEST']._serialized_start=34
  _globals['_CREATEGROUPREQUEST']._serialized_end=114
  _globals['_GROUPRESPONSE']._serialized_start=116
  _globals['_GROUPRESPONSE']._serialized_end=169
  _globals['_ADDMEMBERSTOGROUPREQUEST']._serialized_start=171
  _globals['_ADDMEMBERSTOGROUPREQUEST']._serialized_end=253
  _globals['_GROUPSERVICE']._serialized_start=256
  _globals['_GROUPSERVICE']._serialized_end=426
# @@protoc_insertion_point(module_scope)
