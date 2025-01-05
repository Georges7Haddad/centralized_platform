"use client";

import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/navigation";

// GraphQL mutation to create a new question
const CREATE_QUESTION = gql`
  mutation CreateQuestion(
    $userId: Int!
    $courseId: Int!
    $title: String!
    $content: String!
  ) {
    createQuestion(
      userId: $userId
      courseId: $courseId
      title: $title
      content: $content
    ) {
      id
      title
      content
      userId
      courseId
    }
  }
`;

export default function QuestionForm({ courseId }) {
  const router = useRouter(); // so we can refresh the page data
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [createQuestion, { loading, error }] = useMutation(CREATE_QUESTION);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!title || !content) return;

    try {
      // Hardcode userId=1 for now
      await createQuestion({
        variables: {
          userId: 1,
          courseId,
          title,
          content,
        },
      });

      // Clear the form
      setTitle("");
      setContent("");

      // This forces the server component to reload => updated question list
      router.refresh();
    } catch (err) {
      console.error("Error creating question:", err);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: "2rem",
        border: "1px solid #ddd",
        padding: "1rem",
      }}
    >
      <h2>Ask a Question</h2>

      {error && (
        <p style={{ color: "red" }}>
          Failed to create question: {error.message}
        </p>
      )}

      <div style={{ marginBottom: "1rem" }}>
        <label>Title:</label>
        <br />
        <input
          type="text"
          placeholder="Enter question title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={loading}
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>Content:</label>
        <br />
        <textarea
          placeholder="Enter question content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          disabled={loading}
        />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit Question"}
      </button>
    </form>
  );
}
