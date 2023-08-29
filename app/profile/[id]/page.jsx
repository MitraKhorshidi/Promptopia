"use client";

import Profile from "@/components/Profile";
import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const OthersProfile = ({ params }) => {
  
    const searchParams = useSearchParams();
    const userName = searchParams.get('name');

    const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPrompts() {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();
      setPosts(data);
    }

    if (params.id) {
      fetchPrompts();
    }
  }, [params.id]);

  return <Profile name={userName} desc={`Welcom to ${userName} profile`} data={posts} />;
};

export default OthersProfile;
