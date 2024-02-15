document.addEventListener("DOMContentLoaded", function () {
    const eventDescElements = document.querySelectorAll(".eventDesc");

    eventDescElements.forEach(function (eventDescElement) {
        const originalText = eventDescElement.textContent;
        const maxLength = 80;
        const readMoreBtn = eventDescElement.nextElementSibling; // Assuming the button is a sibling

        if (originalText.length > maxLength) {
            const truncatedText = originalText.substring(0, maxLength) + "...";
            eventDescElement.textContent = truncatedText;
            readMoreBtn.style.display = "inline"; // Show the button
        } else {
            readMoreBtn.style.display = "none"; // Hide the button
        }

        // Add event listener to "Read More" button
        readMoreBtn.addEventListener("click", function () {
            // Get the title from eventDescWrapper
            const title = eventDescElement.parentElement.querySelector(".eventTitle").textContent;
            // Get the date and month from eventDateWrapper
            const date = eventDescElement.parentElement.previousElementSibling.querySelector(".date").textContent;
            const month = eventDescElement.parentElement.previousElementSibling.querySelector(".month").textContent;
            // Display the full event information in the modal
            document.getElementById("fullEventTitle").textContent = title;
            document.getElementById("fullEventDate").textContent = `${date} ${month}`;
            document.getElementById("fullEventDescription").textContent = originalText;
            // Show the modal
            document.getElementById("eventModal").style.display = "block";
        });
    });

    // Close the modal when the close button is clicked
    document.querySelector(".close").addEventListener("click", function () {
        document.getElementById("eventModal").style.display = "none";
    });

    // Close the modal when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target == document.getElementById("eventModal")) {
            document.getElementById("eventModal").style.display = "none";
        }
    });
});




// swiper script 
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  });