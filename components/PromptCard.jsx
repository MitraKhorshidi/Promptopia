"use client";
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const PromptCard = ({ post, changeTagHandler, handleDelete, handleEdit }) => {
  const [isCopied, setIsCopied] = useState(false);
  const {data : session} = useSession();
  const pathName = usePathname();

  const handleCopy = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <div className="prompt_card flex flex-col justify-center gap-2">
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
            {post.creator?.userName}
          </h3>
          <p className="text-gray-900 font-inter text-sm">
            {post.creator?.email}
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
        #{post.tag}
      </p>
      {(pathName === '/profile' & session?.user.id === post.creator._id) && (
      <div className="flex flex-center gap-6 border-t border-gary-100 pt-2">
          <button className="font-inter text-sm cursor-pointer green_gradient" onClick={handleEdit}>Edit</button>
          <button className="font-inter text-sm cursor-pointer orange_gradinet" onClick={handleDelete}>Delete</button>
      </div>)}
    </div>
  );
};

export default PromptCard;
