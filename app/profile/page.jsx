"use client";

import Profile from "@/components/Profile";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const MyProfile = () => {

  const router = useRouter();

  const [posts, setPosts] = useState([]);

  const { data : session } = useSession();
  const userId = session?.user?.id;

  useEffect(() => {
    async function fetchPrompts() {
      const response = await fetch(`/api/users/${userId}/posts`);
      const data = await response.json();
      setPosts(data);
    }

    if (userId) {
      fetchPrompts();
    }
  }, [userId]);

  async function handleDelete(post) {
    const isConfirmed = confirm('Are you sure you want to delete this prompt?');
    if(isConfirmed){
      try {
        await fetch(`/api/prompt/${post._id.toString()}`,{method: 'DELETE'});
        const filteredProps = posts.filter((p)=>p._id !== post._id);
        setPosts(filteredProps);
      } catch (error) {
        console.log(error);
      }
    }
  }
  function handleEdit(post) {
    router.push(`/update-prompt?id=${post._id}`);
  }
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
