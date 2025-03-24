1. Create a Virtual Environment

```bash
virtualenv env
```

2. Activate the Virtual Environment

Windows

```bash
env\Scripts\activate
```

Linux/Mac

```bash
source env/bin/activate
```

3. Install Dependencies

```bash
pip install -r dependencies.txt
```

4. Start the server

```bash
python3 src/server.py
```

5. Test the server

```bash
python3 src/client.py
```

6. Regenerate proto files

```bash
python3 -m grpc_tools.protoc -I src/proto --proto_path=src/generated/ --python_out=src/generated/ --pyi_out=src/generated/ --grpc_python_out=src/generated/ src/proto/chat_service.proto
```
