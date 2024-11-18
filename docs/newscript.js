// script.js
function filterImages() {
  // Get selected values from each dropdown
  const selectedRoute = document.getElementById('route-select').value.toLowerCase();
  const selectedFrom = document.getElementById('from-select').value.toLowerCase();
  const selectedTo = document.getElementById('to-select').value.toLowerCase();

  // Get all filter divs (each image container)
  const filterDivs = document.querySelectorAll('.filterdiv');

  // Loop through each filter div and hide/show based on selected filters
  filterDivs.forEach(function(div) {
    const route = div.getAttribute('data-route').toLowerCase();
    const from = div.getAttribute('data-from').toLowerCase();
    const to = div.getAttribute('data-to').toLowerCase();

    // Check if the image matches the selected filters
    let shouldDisplay = true;

    // Check each filter, show the item only if it matches the selected filter
    if (selectedRoute !== 'all' && route !== selectedRoute) {
      shouldDisplay = false;
    }
    if (selectedFrom !== 'all' && from !== selectedFrom) {
      shouldDisplay = false;
    }
    if (selectedTo !== 'all' && to !== selectedTo) {
      shouldDisplay = false;
    }

    // Show or hide the image based on the filtering logic
    div.style.display = shouldDisplay ? 'block' : 'none';
  });
}