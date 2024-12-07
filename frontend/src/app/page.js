export default async function Page() {
  let req = await fetch("http://127.0.0.1:8000/");
  let resp = await req.text();

  return <div>{resp}</div>;
}
