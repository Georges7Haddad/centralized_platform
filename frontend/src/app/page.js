"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/").then((response) =>
      setData(response.text())
    );
  }, []); // Runs only once when the component loads

  return <div data-testid="response">{data}</div>;
}
