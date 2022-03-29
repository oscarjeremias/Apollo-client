import React from "react";
import { useQuery, gql } from "@apollo/client";

export default function Home() {
  const QUERY_DATA = gql`
    query {
      post(id: 1) {
        id
        title
        body
      }
    }
  `;
  const { loading, error, data } = useQuery(QUERY_DATA);
  return (
    <div className="w-full min-h-screen bg-blue-300 flex flex-col items-start text-slate-100 p-8">
      <h1 className="text-center font-bold text-3xl">
        Graphql com Apollo client
      </h1>
      <div className="p-4 border border-slate-500 bg-blue-500 my-4">
        Post: {data && data.post.id}
      </div>
      <div className="p-4 border border-slate-500 bg-blue-500 my-4">
        Title: {data && data.post.title}
      </div>
    </div>
  );
}
