// from data.js
var UFOdata = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

//  Use d3 to update each cell's text with
UFOdata.forEach(function(Sightings) {
    console.log(Sightings);
    var row = tbody.append("tr");
    Object.entries(Sightings).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the UFO report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
// Select the button
var button = d3.select("#filter-btn");
  button.on("click", function() {

    // Select the input element and get the raw HTML node
    var SearchDate = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = SearchDate.property("value");
  
    console.log(inputValue);
  
    var filteredData = UFOdata.filter(Sighting => Sighting.datetime === inputValue);
  
    console.log(filteredData);
    tbody.html("");
    filteredData.forEach(function(Sightings) {
        console.log(Sightings);
        var row = tbody.append("tr");
        Object.entries(Sightings).forEach(function([key, value]) {
          console.log(key, value);
          // Append a cell to the row for each value
          // in the UFO report object
          var cell = row.append("td");
          cell.text(value);
        });
      });
});