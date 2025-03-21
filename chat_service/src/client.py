import grpc
from generated.chat_service_pb2_grpc import ChatServiceStub
from generated.chat_service_pb2 import HealthCheckRequest


def run():
    with grpc.insecure_channel("localhost:50051") as channel:
        stub = ChatServiceStub(channel)
        req = HealthCheckRequest(message="Yo")
        resp = stub.HealthCheck(req)
        print(resp.message)


if __name__ == "__main__":
    run()
