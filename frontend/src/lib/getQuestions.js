// file: src/lib/getQuestions.js
export async function getQuestionsByCourseId(courseId) {
  const res = await fetch("http://127.0.0.1:8000/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // We'll send a GraphQL query
    body: JSON.stringify({
      query: `
          query GetQuestions($courseId: Int!) {
            getQuestions(courseId: $courseId) {
              id
              userId
              courseId
              title
              content
            }
          }
        `,
      variables: { courseId },
    }),
    // Important: default is 'force-cache'. If you want fresh data on every request:
    cache: "no-store",
  });

  const json = await res.json();
  // return the array of questions
  return json.data?.getQuestions || [];
}
