from concurrent import futures
from generated.chat_service_pb2 import HealthCheckRequest, HealthCheckReply
from generated.chat_service_pb2_grpc import (
    add_ChatServiceServicer_to_server,
    ChatServiceServicer,
)
import grpc


class ChatService(ChatServiceServicer):
    def HealthCheck(self, req: HealthCheckRequest, _context) -> HealthCheckReply:
        return HealthCheckReply(message="Message Well Received: " + req.message)


def serve():
    print("Starting Server")
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    add_ChatServiceServicer_to_server(ChatService(), server)
    server.add_insecure_port("[::]:50051")
    server.start()
    print("Server Started")
    server.wait_for_termination()


if __name__ == "__main__":
    serve()
