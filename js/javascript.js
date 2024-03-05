 document.addEventListener('DOMContentLoaded', function() {
    const modalButton = document.getElementById('modalButton');
    const closeBtn = document.getElementById('close');
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('overlay');

    // Check if the popup has been shown before
    const popupShown = localStorage.getItem('popupShown');

    if (!popupShown) {
      // Open the modal after a 2-second delay
      setTimeout(() => {
        modal.style.display = 'block';
        overlay.style.display = 'block';
        
        // Set a flag in localStorage to indicate that the popup has been shown
        localStorage.setItem('popupShown', 'true');
      }, 2000);
    }

    // Close the modal
    function closeModal() {
      modal.style.display = 'none';
      overlay.style.display = 'none';
    }

    // Event listener for the close button
    closeBtn.addEventListener('click', closeModal);

    // Event listener for the overlay to close the modal
    overlay.addEventListener('click', closeModal);

    // Event listener for the modal button to open the modal
    modalButton.addEventListener('click', () => {
      modal.style.display = 'block';
      overlay.style.display = 'block';
    });
  });