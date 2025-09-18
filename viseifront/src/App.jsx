import { Link } from "react-router-dom";

function App() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio Store</h1>

      <div className="flex gap-4">
        <Link
          to="/projects"
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          View Projects
        </Link>

        <Link
          to="/products"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          View Products
        </Link>
      </div>
    </div>
  );
}

export default App;
