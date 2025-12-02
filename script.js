$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.rest-button').click(clickedRestButton);
    $('.reset-button').click(clickedResetButton);

    document.querySelector(".treat-button").addEventListener("click", () => {
      showTemporaryImage("images/fatty-kirby.gif", 3000);  
    });

    document.querySelector(".play-button").addEventListener("click", () => {
      showTemporaryImage("images/KirbyBreak.gif", 3000);
    });

    document.querySelector(".exercise-button").addEventListener("click", () => {
      showTemporaryImage("images/kirby-run.png", 3000);
    });

    document.querySelector(".rest-button").addEventListener("click", () => {
      showTemporaryImage("images/kirbysleep.gif", 3000);
    });
    
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Kirby", weight:10, happiness:100, energy:100};
  
    function clickedTreatButton() {
      //increase pet happiness
      pet_info.happiness += 10;
      //increase pet weight
      const weight = pet_info.weight;
      const add5 = 5;
      var sum = weight + add5; 
      pet_info.weight = sum;
      //decrease pet energy
      pet_info.energy -= 1;
      document.getElementById('dialogue').textContent = 'Thank you for the yummy treat';
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      pet_info.happiness += 10;
      // Decrease pet weight
      pet_info.weight -= 2;
      //decrease pet energy
      pet_info.energy -= 5;
      document.getElementById('dialogue').textContent = 'Let me break it down';
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      pet_info.happiness -= 5;
      // Decrease pet weight
      pet_info.weight -= 5;
      //decrease energy
      pet_info.energy -= 10;

      document.getElementById('dialogue').textContent = 'I am Speed';
      checkAndUpdatePetInfoInHtml();
    }

    function clickedRestButton() {
      // Increase pet happiness
      pet_info.happiness += 5;
      // Reset pet Energy to 100
      pet_info.energy = 100;

      document.getElementById('dialogue').textContent = 'Sleepy Time!';
      checkAndUpdatePetInfoInHtml();
    }

    //reset function restores to default values
    function clickedResetButton() {
      pet_info.name = "Kirby";
      pet_info.weight = 10;
      pet_info.happiness = 100;
      pet_info.energy = 100;
      document.getElementById('dialogue').textContent = 'Hi, I am Kirby';
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.
      //Okay this is a super messy conditional that could be solved with some if else but im scrambling
      //Essentially if Weight or Happiness or Energy get too low than it prevents and disables the buttons for the user
      if (pet_info.weight > 1) {
          pet_info.weight = pet_info.weight;
      } else {
        pet_info.weight = 1;
        pet_info.happiness -= 20;
        document.getElementById('dialogue').textContent = 'im too hungry master :( ';
        document.getElementById('exercise').disabled = true;
        document.getElementById('play').disabled = true;
      }   

      if (pet_info.happiness > 0) {
          pet_info.happiness = pet_info.happiness;
      } else {
        pet_info.happiness =0;
        document.getElementById('dialogue').textContent = 'im too sad :( ';
        document.getElementById('exercise').disabled = true;
      }   

      if (pet_info.energy > 0) {
          pet_info.energy = pet_info.energy;
      } else {
        pet_info.energy =0;
        pet_info.happiness -= 20;
        document.getElementById('dialogue').textContent = 'im too tired :( ';
        document.getElementById('exercise').disabled = true;
        document.getElementById('play').disabled = true;
        document.getElementById('treat').disabled = true;
      }   

      if(pet_info.weight > 1 && pet_info.energy > 0 && pet_info.happiness > 0)
      {
        document.getElementById('exercise').disabled = false;
        document.getElementById('play').disabled = false;
        document.getElementById('treat').disabled = false;
      }
    }

    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.energy').text(pet_info['energy']);
    }

    function showTemporaryImage(newImageUrl, duration = 3000) {
    const petImage = document.getElementById("petImage");

    const originalImage = petImage.src;   // save original

    petImage.src = newImageUrl;           // replace with temporary

    setTimeout(() => {
      petImage.src = originalImage;       // restore original
    }, duration);


    //Usage of the mouseover method
    //It takes in the petImage ID as the method and as that image is mouseover selected
    //it will change the Image into any gif or image i chose it to be
    $("#petImage").mouseover(function () {
      $(this).attr("src", "images/pet-kirby.gif");
    });

    $("#petImage").mouseout(function () {
      $(this).attr("src", "images/KRtDLD_Kirby_Inhale.png");
    });

    //Usage of the keypress method 
    //it uses the document manipulation to take in the keypress
    //when the event key its pressed it will play a set command here its to play a certain function
    //here i have it set to r to call the reset function and reset the pet object to degault values
    $(document).keypress(function (event) {
    if (event.key === "r" || event.key === "R") {
      clickedResetButton();
    }
    });
}
  