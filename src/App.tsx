import Hero from "./components/Hero";
import Navbar from "./components/Navbar/Navbar";
import Stats from "./components/Stats";

function App() {
  return (
    <>
      <main className="max-w-7xl mx-auto px-4 py-2">
        {/* Navbar */}
        <Navbar />

        {/* Hero */}
        <Hero />

        {/* Stats */}
        <Stats />

        {/* Companies */}
      </main>
    </>
  );
}

export default App;
