function MainContent() {
    return (
      <div className="ml-64 pt-16 p-6">
        <h1 className="text-3xl font-bold">Welcome to Agri-Tech Dashboard</h1>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-white shadow rounded p-4">
            <h3 className="text-xl font-semibold">Weather Updates</h3>
            <p>Partly cloudy, 28°C</p>
          </div>
          <div className="bg-white shadow rounded p-4">
            <h3 className="text-xl font-semibold">Market Prices</h3>
            <p>Wheat: $200/ton</p>
          </div>
          <div className="bg-white shadow rounded p-4">
            <h3 className="text-xl font-semibold">Community</h3>
            <p>New post: "Best irrigation methods for tomatoes"</p>
          </div>
        </div>
      </div>
    );
  }
  