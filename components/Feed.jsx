"use client";

import { useState } from "react";

const Feed = () => {
  const [searchText, setSearchText] = useState("");

  const searchChangeHandler =(e)=>{}
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input className="search_input peer" type="text" value={searchText} onChange={searchChangeHandler} placeholder="Search for a tag or a username"/>
      </form>
    </section>
  );
};

export default Feed;
