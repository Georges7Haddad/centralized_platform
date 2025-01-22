#!/bin/bash

set -e
#Frontend
cd frontend

# Run frontend linter
echo "Running frontend linter..."
npm run lint

# Run frontend tests
echo "Running frontend tests..."
npm test

cd ..

#Backend
cd backend
#Run backend linter
echo "Running backend linter..."
ruff check .

# Run backend tests
echo "Running backend tests..."
pytest



