"use client";

import { gql, useQuery } from "@apollo/client";
import * as React from "react";

export default function Page({ params }) {
  const { id } = React.use(params);
  const [user, setUser] = React.useState(null);

  // TODO: Move to file with queries
  const GET_USER = gql`
    query UserQuery($id: String!) {
      getUser(id: $id) {
        firstName
        lastName
      }
    }
  `;

  const { _data, loading, _error } = useQuery(GET_USER, {
    variables: { id },
    onCompleted: (data) => {
      setUser(data.getUser);
    },
  });

  if (!user || loading) return <div>Loading...</div>;
  return (
    <div>
      Hello User with id {id}, name {user.firstName}, lastname {user.lastName}
    </div>
  );
}
