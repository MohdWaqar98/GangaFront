Search initial to Map functionality

<div class="relative w-full max-w-lg">
  <input
    type="text"
    id="search"
    placeholder="Search..."
    class="w-full p-2 border border-gray-300 rounded-lg transition-all duration-300"
  />
  <ul
    id="suggestions"
    class="hidden absolute left-0 right-0 bg-white border border-gray-300 rounded-lg max-h-48 overflow-y-auto shadow-lg"
  ></ul>
</div>
<button
  id="getForecast"
  class="mt-4 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
>
  Get Forecast
</button>





const locations = [
  { name: "Jail Ghat, Buxar (Bihar)", lat: 25.519940, lng: 83.900847 }, // 4
  { name: "Bijnor (Uttar Pradesh)", lat: 29.373472, lng: 78.040972 }, // 2
  { name: "Cremation Ghat (Bihar)", lat: 25.281489, lng: 87.247598 }, // 6
  { name: "Khagra, Beharampore (West Bengal)", lat: 24.100623, lng: 88.243263 }, // 9
  { name: "LCT Ghat (Jharkhand)", lat: 25.292498, lng: 87.631830 }, // 7
  { name: "Tarighat Ghazipur (Uttar Pradesh)", lat: 25.587222, lng: 83.605361 }, // 3
  { name: "Raj Mahal (Bihar)", lat: 25.054889, lng: 87.838639 }, // 8
  { name: "Sultanpur (Uttarakhand)", lat: 29.641083, lng: 78.101750 }, // 1
  { name: "Manjhighat (Bihar)", lat: 25.733210, lng: 84.622470 }, // 5
  { name: "Diamond Harbour (West Bengal)", lat: 22.183389, lng: 88.186222 }, // 10
];

const searchInput = document.getElementById("search");
const suggestionsBox = document.getElementById("suggestions");
const getForecastButton = document.getElementById("getForecast");

// Populate suggestions and expand search bar
searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  suggestionsBox.innerHTML = "";

  if (query) {
    // Expand the search bar and show suggestions
    searchInput.classList.add("expanded");
    const filteredLocations = locations.filter((loc) =>
      loc.name.toLowerCase().includes(query)
    );
    if (filteredLocations.length > 0) {
      suggestionsBox.classList.remove("hidden");
      filteredLocations.forEach((loc) => {
        const li = document.createElement("li");
        li.textContent = loc.name;
        li.className = "p-2 cursor-pointer hover:bg-gray-200";
        li.addEventListener("click", () => {
          searchInput.value = loc.name;
          suggestionsBox.classList.add("hidden");
          searchInput.classList.remove("expanded");
        });
        suggestionsBox.appendChild(li);
      });
    } else {
      suggestionsBox.classList.add("hidden");
    }
  } else {
    // Collapse the search bar and hide suggestions
    searchInput.classList.remove("expanded");
    suggestionsBox.classList.add("hidden");
  }
});

// Redirect on Get Forecast
getForecastButton.addEventListener("click", () => {
  const locationName = searchInput.value.trim();
  const location = locations.find((loc) => loc.name === locationName);

  if (!location) {
    alert("No Result Found!! Please select a valid location.");
    return;
  }

  // Pass location details via query parameters
  window.location.href = `map.html?lat=${location.lat}&lng=${location.lng}&name=${location.name}`;
});
