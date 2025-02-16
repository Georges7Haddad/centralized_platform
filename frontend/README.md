## Getting Started

- Start the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

- Go to http://localhost:3000

## Server URL

create a .env file in frontend directory
add '.env' to the .gitignorefile
in the .env file add the following: NEXT_PUBLIC_BACKEND_URL=<the-url>
then in the files where you need to use the url add: const serverUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/<your-path>`
