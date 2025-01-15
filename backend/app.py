from fastapi import FastAPI
from fastapi.responses import JSONResponse

app = FastAPI()

@app.get("/health")
def health_check():
    return JSONResponse(content={"status": "healthy"})

@app.get("/dummy")
def dummy_data():
    return JSONResponse(content={"data": "This is some dummy data"})

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host='0.0.0.0', port=8000)
