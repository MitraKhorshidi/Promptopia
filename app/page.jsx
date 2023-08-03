import Feed from "@/components/Feed";

const Home = () => {
  return (
    <section className="flex-center flex-col w-full text-center">
      <h1 className="head_text">
        Discover & Share
        <br className="md:hidden" />
        <span className="orange_gradient">AI Powered Propmts</span>
      </h1>
      <p className="desc">Promptopia is an open-source AI propmting tool in modern world to discover , create and share creative prompts</p>
      <Feed/>
    </section>
  );
};

export default Home;
