"use client";

import { useEffect, useState } from "react";
import PromptCardList from "./PromptCardList";

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const searchChangeHandler =(e)=>{}

  const [prompts, setPrompts] = useState([])
  useEffect(()=>{
    const fetchPrompts=async()=>{
      const response = await fetch('/api/prompt');
      const data = await response.json();

      setPrompts(data);

    }

    fetchPrompts();
  },[]);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input className="search_input peer" type="text" value={searchText} onChange={searchChangeHandler} placeholder="Search for a tag or a username"/>
      </form>
      <PromptCardList data={prompts} changeTagHandler={()=>{}}/>
    </section>
  );
};

export default Feed;
