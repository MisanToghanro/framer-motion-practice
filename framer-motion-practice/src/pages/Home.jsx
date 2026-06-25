import { Link } from "react-router-dom";
function Home() {
  return (
    <main className="max-w-5xl mx-auto py-16 px-6">
      <h1 className="text-5xl font-bold mb-6">
        Learn Framer Motion
      </h1>

      <p className="text-lg mb-8">
        This project is dedicated to learning page transitions,
        animations, and interactive UI using Motion for React.
      </p>

      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
        <Link to="/about">
        Get Started
        </Link>
        
      </button>
    </main>
  );
}

export default Home;