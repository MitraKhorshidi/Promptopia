"use client";

import Profile from "@/components/Profile";
import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";

const MyProfile = () => {
  const [posts, setPosts] = useState([]);

  const { data : session } = useSession();
  console.log('session', session?.user);

  useEffect(() => {
    async function fetchPrompts() {
      console.log('session user' , session?.user)
      const response = await fetch(`/api/users/${session?.user.email}/posts`);
      const data = await response.json();
      setPosts(data);
      console.log('data',data);
    }

    if (session?.user.email) {
      fetchPrompts();
    }
  }, []);

  function handleDelete() {}
  function handleEdit() {}
  return (
    <Profile
      name="My"
      desc="Welcom to your profile"
      data={posts}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
    />
  );
};

export default MyProfile;
