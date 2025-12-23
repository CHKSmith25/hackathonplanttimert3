// Custom JavaScript: This is where you add interactivity to your website

function do_nothing(){}

function which_timer() {
    console.log("which")
    document.getElementById("start-button").onclick = null
    if(study_state == "work"){
        console.log("work")
        document.getElementById("text").innerHTML = "working";
        start_timer(25*60*1000);
        study_state = "break";
        if(stage<2){
            stage += 1;
        }
    } else if(study_state == "break"){
        console.log("break")
        document.getElementById("text").innerHTML = "taking a break";
        start_timer(5*60*1000);
        study_state = "work";
    }
};


function start_timer(countDownLength){

    let countDownTime = new Date().getTime() + countDownLength;

    // Update the count down every 1 second
    let x = setInterval(function() {

    let now = new Date().getTime();

    // Find the distance between now and the count down time
    let distance = countDownTime - now;

    // Time calculations for hours, minutes and seconds
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer-display").innerHTML = ""

    if(hours > 0){
        document.getElementById("timer-display").innerHTML += hours + ":"
    }
    if(minutes > 0){
        document.getElementById("timer-display").innerHTML += minutes + ":"
    }
    if(seconds > 0){
        document.getElementById("timer-display").innerHTML += seconds
    }

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        if(study_state == "break"){
          document.getElementById("text").innerHTML = "Press start to take a break";
        } else if (study_state == "work"){
          document.getElementById("text").innerHTML = "Press start to start work timer";
        }
        showPlant()
        document.getElementById("start-button").onclick = which_timer

    }

    }, 1000);
};

function showPlant() {
    const plantImage = document.getElementById('image');
    
    if (stage === 0) {
        plantImage.src = 'plant_images/Plant1_stage_1.png';
        // document.getElementById("image").innerHTML = "0"
    } else if (stage === 1) {
        plantImage.src = 'plant_images/Plant1_stage_2.png';
        // document.getElementById("image").innerHTML = "1"
    } else if (stage === 2) {
        plantImage.src = 'plant_images/Plant1_stage_3.png';
        // document.getElementById("image").innerHTML = "2"
    }
};


console.log("doing this");
let countDownTime = new Date().getTime() + (60 * 1000);
let study_state = "work";
let stage = 0;
console.log("state: "+ study_state)

// This event listener waits for the entire HTML page to load before running any code
document.addEventListener("DOMContentLoaded", function () {
  console.log("Page loaded!");

  
  showPlant();

  // We find the button using its unique ID from the HTML
  const ctaButton = document.getElementById("cta-button");

  // Check if the button exists on the page before adding an event listener
  if (ctaButton) {
    // This function runs whenever the button is clicked
    ctaButton.addEventListener("click", function () {
      console.log("CTA button clicked");
      alert("Instructions: ..........");
    });
  }
})
