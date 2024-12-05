/* eslint-disable jsx-a11y/alt-text */
import React from "react";

// AnimatedText Component
const AnimatedText = ({ words }: { words: string[] }) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words]);

  return (
    <span className="text-green-600 font-extrabold animate-fade">
      {words[index]}
    </span>
  );
};

// FeatureCard Component
const FeatureCard = ({
  title,
  description,
  img,
}: {
  title: string;
  description: string;
  img: string;
}) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden text-center hover:scale-105 transition-transform duration-300">
    <img
      src={img}
      alt={title}
      className="w-full h-96 object-cover"
    />
    <div className="p-6">
      <h4 className="text-xl font-bold text-green-700">{title}</h4>
      <p className="mt-3 text-gray-600">{description}</p>
    </div>
  </div>
);

// Main Landing Page
const LandingPage = () => {
  const animatedWords = ["Empower Farmers", "Modernize Agriculture", "Connect Markets"];

  return (
    <div className="bg-gray-50">
      <header className="bg-green-700 shadow-md fixed top-0 w-full z-50">
  <div className="flex justify-between items-center py-4 px-6">
    {/* Logo */}
    <h1 className="text-3xl font-bold text-white flex items-center">
      <span>
        <img
      src="https://plus.unsplash.com/premium_photo-1664303828953-3e8ef4ac44e2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      className="w-20 h-20 rounded"
      /></span>
      AgriConnect
    </h1>

    {/* Hamburger Menu for Small Screens */}
    <div className="lg:hidden flex items-center">
      <button
        id="menu-button"
        className="text-white focus:outline-none"
        onClick={() =>
          document.getElementById("mobile-menu")?.classList.toggle("hidden")
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>

    {/* Desktop Navigation */}
    <nav className="hidden lg:flex space-x-6">
      <a
        href="#features"
        className="text-white flex items-center hover:text-green-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10h18M3 14h18M3 18h18"
          />
        </svg>
        Features
      </a>
      <a
        href="#about"
        className="text-white flex items-center hover:text-green-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 4h10M4 4v16m7-16v16"
          />
        </svg>
        About
      </a>
      <a
        href="#contact"
        className="text-white flex items-center hover:text-green-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 12H8m4-4v8"
          />
        </svg>
        Contact
      </a>
      <a
        href="/register"
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
        Register
      </a>
    </nav>
  </div>

  {/* Mobile Menu */}
  <div
    id="mobile-menu"
    className="lg:hidden hidden bg-green-800 text-white space-y-2 px-6 py-4"
  >
    <a href="#features" className="block hover:text-green-300">
      Features
    </a>
    <a href="#about" className="block hover:text-green-300">
      About
    </a>
    <a href="#contact" className="block hover:text-green-300">
      Contact
    </a>
    <a
      href="/register"
      className="block bg-green-500 text-center py-2 rounded-md hover:bg-green-600"
    >
      Register
    </a>
  </div>
</header>


      {/* Hero Section */}
<section className="relative text-center py-44 px-6 mt-28 overflow-hidden">
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source
      src="https://media.istockphoto.com/id/685206726/video/ld-tractor-with-a-boom-sprayer-spraying-young-corn-crops-on-the-sunny-field.mp4?s=mp4-640x640-is&k=20&c=jIMC2T_NSg-X2ZLQa8UzZDrYoVYCApQ4zruxrWZs0hk=" 
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
  
  {/* Overlay */}
  <div className="absolute inset-0 bg-black opacity-50"></div>

  {/* Content */}
  <div className="relative z-10 text-white">
    <h2 className="text-5xl font-extrabold">
      <AnimatedText words={animatedWords} />
    </h2>
    <p className="mt-6 text-xl">
      Revolutionizing agriculture in Zimbabwe through innovative digital solutions.
    </p>
    <div className="mt-8">
      <a
        href="#features"
        className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 mr-4"
      >
        Learn More
      </a>
      <a
        href="#contact"
        className="bg-transparent border-2 border-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-600"
      >
        Contact Us
      </a>
    </div>
  </div>
</section>


      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-100 px-6">
        <h3 className="text-3xl font-bold text-center text-green-700">Features</h3>
        <p className="text-center text-gray-600 mt-4">
          Explore the tools and services that make AgriConnect a game-changer for agriculture.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <FeatureCard
            title="Live Weather Updates"
            description="Get accurate forecasts tailored for farming needs."
            img="https://images.unsplash.com/photo-1561553873-e8491a564fd0?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <FeatureCard
            title="Market Price Comparisons"
            description="View real-time crop prices from multiple markets."
            img="https://images.unsplash.com/photo-1498491480129-04f6d95c90be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <FeatureCard
            title="Expert Advice"
            description="Connect with agronomists and access farming guides."
            img="https://plus.unsplash.com/premium_photo-1663039878530-66fe183c2a23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <FeatureCard
            title="Digital Marketplace"
            description="Sell your produce directly to buyers securely."
            img="https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <FeatureCard
            title="Post-Harvest Management"
            description="Minimize losses with better storage solutions."
            img="https://plus.unsplash.com/premium_photo-1661962983603-96bc179dd94e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <FeatureCard
            title="Financial Assistance"
            description="Access microloans and crop insurance options."
            img="https://images.unsplash.com/photo-1624953187665-7d41d0ade16e?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-green-200">
        <h3 className="text-3xl font-bold text-center text-green-700">About AgriConnect</h3>
        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          AgriConnect is a modern platform designed to bridge the gap between farmers and buyers,
          leveraging technology to address the challenges of unreliable weather, limited market access,
          and post-harvest losses in Zimbabwe.
        </p>
        <div className="mt-12 w-full">
        <video
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-96 object-cover"
>
  <source
    src="https://cdn.pixabay.com/video/2023/05/18/163560-828200792_large.mp4" 
    type="video/mp4"
  />
  Your browser does not support the video tag.
</video>

</div>

      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100 px-6">
        <h3 className="text-3xl font-bold text-center text-green-700">Get in Touch</h3>
        <p className="text-center text-gray-600 mt-4">
          Ready to transform your farming experience? Contact us today!
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="/contact"
            className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-700 text-white py-6 text-center">
        <p>© 2024 AgriConnect. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
