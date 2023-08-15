"use client";
import { useState } from "react";
import Image from "next/image";

const PromptCard = ({ post, changeTagHandler, deleteHandler, editHandler }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <div className="prompt_card flex flex-col justify-center">
      <div className="flex flex-row gap-5 mb-5">
        <Image
          src="/assets/images/logo.svg"
          alt="profile"
          width={40}
          height={40}
          className="object-contain rounded-full"
        />
        <div className="flex flex-col justify-center items-start gap-1">
          <h3 className="font-semibold font-satoshi text-gray-800">
            Mitra Khorshidi
          </h3>
          <p className="text-gray-900 font-inter text-sm">
            mitrakhorshidi@gmail.com
          </p>
        </div>
        <div onClick={handleCopy}>
          <Image
            src={isCopied ? "/assets/icons/tick.svg" : "/assets/icons/copy.svg"}
            alt="copy"
            height={20}
            width={20}
            className="object-contain"
          />
        </div>
      </div>
      <p className="text-justify text-gray-700 font-satoshi">{post.prompt}</p>
      <p
        className="text-sm blue_gradient font-inter self-start my-2 cursor-pointer"
        onClick={() => changeTagHandler && changeTagHandler(tag)}
      >
        {post.tag}
      </p>
    </div>
  );
};

export default PromptCard;
