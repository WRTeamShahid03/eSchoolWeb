 // Add a script to show/hide eventReadMoreBtn based on character count
 document.addEventListener("DOMContentLoaded", function () {
    const eventDescElements = document.querySelectorAll(".eventDesc");

    eventDescElements.forEach(function (eventDescElement) {
        const originalText = eventDescElement.textContent;
        const maxLength = 172;
        const readMoreBtn = eventDescElement.nextElementSibling; // Assuming the button is a sibling

        if (originalText.length > maxLength) {
            const truncatedText = originalText.substring(0, maxLength) + "...";
            eventDescElement.textContent = truncatedText;
            readMoreBtn.style.display = "inline"; // Show the button
        } else {
            readMoreBtn.style.display = "none"; // Hide the button
        }
    });
});