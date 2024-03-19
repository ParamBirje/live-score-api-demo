import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <main className="max-w-7xl mx-auto px-4 py-2">
        {/* Navbar */}
        <Navbar />

        {/* Hero */}
        <Hero />

        {/* Stats */}

        {/* Companies */}
      </main>
    </>
  );
}

export default App;
