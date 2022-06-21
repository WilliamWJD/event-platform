import { gql, useQuery } from "@apollo/client";

const GET_LESSON_QUERY = gql`
  query{
    lessons{
      id
      title
    }
  }
`

interface Lesson {
  id: string;
  title: string;
}

export function App() {
  const { data } = useQuery(GET_LESSON_QUERY);

  return (
    <ul>
      {data?.lessons.map((lesson: Lesson) => (
        <li key={lesson.id}>{lesson.title}</li>
      ))}
    </ul>
  )
}