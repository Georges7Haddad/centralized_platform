# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: delete_message.proto
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
    'delete_message.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x14\x64\x65lete_message.proto\x12\tmessaging\">\n\x14\x44\x65leteMessageRequest\x12\x12\n\nmessage_id\x18\x01 \x01(\t\x12\x12\n\ndeletor_id\x18\x02 \x01(\t\",\n\x15\x44\x65leteMessageResponse\x12\x13\n\x0bstatus_code\x18\x01 \x01(\x05\x62\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'delete_message_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  DESCRIPTOR._loaded_options = None
  _globals['_DELETEMESSAGEREQUEST']._serialized_start=35
  _globals['_DELETEMESSAGEREQUEST']._serialized_end=97
  _globals['_DELETEMESSAGERESPONSE']._serialized_start=99
  _globals['_DELETEMESSAGERESPONSE']._serialized_end=143
# @@protoc_insertion_point(module_scope)
