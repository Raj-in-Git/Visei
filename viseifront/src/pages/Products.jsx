export default function Products() {
  const products = [
    { id: 1, name: "3D Printed Keychain", price: "₹199", description: "Customizable keychain with initials.", image: "https://via.placeholder.com/200" },
    { id: 2, name: "Miniature Figurine", price: "₹499", description: "High-quality 3D printed figurine.", image: "https://via.placeholder.com/200" },
    { id: 3, name: "Phone Stand", price: "₹299", description: "Durable stand designed for all phones.", image: "https://via.placeholder.com/200" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded-xl shadow hover:shadow-lg transition">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-bold mt-2">{product.price}</p>
            <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
