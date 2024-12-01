export default function Service() {
    const customerCenters = [
      { city: "Karachi", phone: "03177100001", email: "info@nafeesrentacarpakistan.pk" },
      { city: "Lahore", phone: "03003975497", email: "info@nafeesrentacarpakistan.pk" },
      { city: "Islamabad", phone: "03177100001", email: "info@nafeesrentacarpakistan.pk" },
      { city: "Multan", phone: "03003975497", email: "info@nafeesrentacarpakistan.pk" },
      { city: "Sukkar", phone: "0316279024", email: "info@nafeesrentacarpakistan.pk" },
      { city: "Hyderabad", phone: "0316279024", email: "info@nafeesrentacarpakistan.pk" },
    ];
  
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Customer Centers</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {customerCenters.map((center, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <span className="text-yellow-500 text-2xl mr-2">📍</span>
                  <h2 className="text-xl font-semibold">
                    {center.city} Customer Center
                  </h2>
                </div>
                <div>
                  <p className="text-gray-700">
                    📞{" "}
                    <a
                      href={`tel:${center.phone}`}
                      className="hover:underline text-blue-600"
                    >
                      {center.phone}
                    </a>
                  </p>
                  <p className="text-gray-700">
                    ✉️{" "}
                    <a
                      href={`mailto:${center.email}`}
                      className="hover:underline text-blue-600"
                    >
                      {center.email}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  