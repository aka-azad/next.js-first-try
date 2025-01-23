import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import axios from "axios";
import { redirect } from "next/navigation";
import React from "react";

const blog = async ({ params }) => {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser()
  if (isAuthenticated() && !user) {
    redirect("/api/auth/login");
  }
  const realParams = await params;
  const id = await realParams.id;
  console.log("first =", await id);
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const { userId, title, body } = await response.data;

  return (
    <div>
      <div className="container max-w-screen-sm mx-auto p-10 border-2 mt-10 border-black rounded-lg">
        <div className="w-full border-b-2 border-black">
          <h2 className="text-2xl font-bold">{title}</h2>
          <h5 className="text-xl font-bold mb-4">Author Id: {userId}</h5>
        </div>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default blog;
