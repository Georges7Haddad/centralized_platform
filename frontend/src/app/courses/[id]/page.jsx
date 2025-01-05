import { getQuestionsByCourseId } from "../../../lib/getQuestions";
import QuestionForm from "./QuestionForm";

export default async function CourseDetailPage({ params }) {
  const courseId = parseInt(params.id, 10);

  // 1) Fetch questions server-side (SSR)
  const questions = await getQuestionsByCourseId(courseId);

  // 2) Return the rendered markup
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Course #{courseId}</h1>

      {/* 3) Embed a client component for the question form */}
      <QuestionForm courseId={courseId} />

      <h2>Existing Questions:</h2>
      {questions.length === 0 && <p>No questions yet.</p>}
      {questions.map((q) => (
        <div
          key={q.id}
          style={{
            marginBottom: "1rem",
            border: "1px solid #ccc",
            padding: "0.5rem",
          }}
        >
          <h3>{q.title}</h3>
          <p>{q.content}</p>
          <small>Asked by user #{q.userId}</small>
        </div>
      ))}
    </div>
  );
}
