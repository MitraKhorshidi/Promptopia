"use client";

import Profile from "@/components/Profile";
import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";

const MyProfile = () => {
  const [posts, setPosts] = useState([]);

  const { data : session } = useSession();
  const userId = session?.user?.id;
  console.log('session', userId);

  useEffect(() => {
    async function fetchPrompts() {
      console.log('session user' , userId)
      const response = await fetch(`/api/users/${userId}/posts`);
      const data = await response.json();
      setPosts(data);
      console.log('data',data);
    }

    if (userId) {
      fetchPrompts();
    }
  }, [userId]);

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
