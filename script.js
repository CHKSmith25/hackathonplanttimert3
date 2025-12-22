// Custom JavaScript: This is where you add interactivity to your website

// This event listener waits for the entire HTML page to load before running any code
document.addEventListener("DOMContentLoaded", function () {
  console.log("Page loaded!");

  // We find the button using its unique ID from the HTML
  const ctaButton = document.getElementById("cta-button");

  // Check if the button exists on the page before adding an event listener
  if (ctaButton) {
    // This function runs whenever the button is clicked
    ctaButton.addEventListener("click", function () {
      console.log("CTA button clicked");
      alert("Welcome! This is your starting point.");
    });
  }
});

function growPlant(stage) {
    const plantImage = document.getElementById('plant-image');
    
    if (stage === 0) {
        plantImage.src = 'plant_images/Plant1_stage_0.png';
    } else if (stage === 1) {
        plantImage.src = 'plant_images/Plant1_stage_1.png';
    } else if (stage === 2) {
        plantImage.src = 'plant_images/Plant1_stage_2.png';
    }
}
