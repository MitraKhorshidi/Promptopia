import Link from "next/link";
import React from "react";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left blue_gradient">{type} Post</h1>
      <p className="desc">
        {type} and share amazing prompts with the world , and let your
        imagination run wild with any AI-powered platform.
      </p>
      <form
        onSubmit={handleSubmit}
        className="glassmorphism flex flex-col gap-5 w-full max-w-2xl mt-10"
      >
        <label>
          <span className="font-satoshi font-semibold text-gray-700">
            Your AI Prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            className="form_textarea"
            required
            placeholder="Write your prompt here..."
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-gray-700">Tag </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            className="form_input"
            required
            placeholder="#idea #product #webdevelopment"
          />
        </label>
        <div className="flex-end gap-3 mx-3 mb-5">
          <Link href="/" className="text-sm text-gray-500">
            Cancel
          </Link>
          <button
            type='submit'
            disabled={submitting}
            className="text-base rounded-2xl bg-primary-orange text-white shadow-sm p-2"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
