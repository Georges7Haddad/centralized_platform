#!/bin/bash

set -e
#Frontend
cd frontend
npm install

# Run frontend linter
echo "Running frontend linter..."
npm run lint

# Run frontend tests
echo "Running frontend tests..."
npm test

cd ..

#Backend
cd backend
python -m pip install --upgrade pip
pip install -r dependencies.txt
echo "Running backend linter..."
ruff check .

# Run backend tests
echo "Running backend tests..."
pytest



