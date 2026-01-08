import Help from "../components/Help/Help";
import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <main className="p-1">
          <Hero />
          <Help />
        </main>
      </div>
    </>
  );
}

export default Home;
