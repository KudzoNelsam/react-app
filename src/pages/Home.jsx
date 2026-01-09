import Help from "../components/Help/Help";
import Hero from "../components/Hero";
import LocationCards from "../components/LocationCards/LocationCards";

function Home() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <main className="p-1">
          <Hero />
          <Help />
          <LocationCards />
        </main>
      </div>
    </>
  );
}

export default Home;
