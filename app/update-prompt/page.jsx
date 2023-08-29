"use client";
import Form from "@/components/Form";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const EditPrompt = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get('id');

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });

    const editPrompt = async (e) => {
      e.preventDefault();
      setSubmitting(true);

      if(!promptId) return alert('prompt id not found');

      try {
        const response = await fetch(`/api/prompt/${promptId}`, {
          method: "PATCH",
          body: JSON.stringify({
            prompt: post.prompt,
            tag: post.tag,
          }),
        });

        console.log('response of patch',response);

        if (response.ok) {
          router.push("/");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setSubmitting(false);
      }
    };

  useEffect(() => {
    const getPromptDetail = async () => {
      const response = await fetch(`/api/prompt/${promptId}`);
      const data = await response.json();
      console.log('data' , data);

      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    };

    if (promptId) getPromptDetail();
  }, [promptId]);

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={editPrompt}
    />
  );
};

export default EditPrompt;
