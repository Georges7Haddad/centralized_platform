"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState("");
  const serverUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    fetch(serverUrl).then((response) => setData(response.text()));
  }, [serverUrl]); // Runs only once when the component loads

  return <div data-testid="response">{data}</div>;
}
