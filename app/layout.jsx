import NavBar from "@/components/NavBar";
import Provider from "@/components/Provider";
import "@/styles/global.css";

export const metadata = {
  title: "Promptopia",
  description: "Discover and share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <NavBar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
