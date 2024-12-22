// script.js
    function filterImages() {
      // Get selected values from each dropdown
      const selectedFrom = document.getElementById('from-select').value.toLowerCase();
      const selectedTo = document.getElementById('to-select').value.toLowerCase();

      // Get all filter divs (each image container)
      const filterDivs = document.querySelectorAll('.filterdiv');

      // Loop through each filter div and hide/show based on selected filters
      filterDivs.forEach(function(div) {
        const from = div.getAttribute('data-from').toLowerCase();
        const to = div.getAttribute('data-to').toLowerCase();

        // Check if the image matches the selected filters
        let shouldDisplay = true;

        if (selectedFrom !== 'default' && from !== selectedFrom) {
          shouldDisplay = false;
        }
        if (selectedTo !== 'default' && to !== selectedTo) {
          shouldDisplay = false;
        }

        // Show or hide the image based on the filtering logic
        div.style.display = shouldDisplay ? 'block' : 'none';
      });
    }