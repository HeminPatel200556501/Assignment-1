const words = {
  story1: {
    button1: ["Hello", "My", "My"],
    button2: ["My", "friend", "another"],
    button3: ["name", "name", "friend"],
    button4: ["is", "is", "name is"],
    button5: ["Hemin", "Het", "Sneha"]
  },
  story2: {
    button1: ["We", "We", "This"],
    button2: ["live", "are", "is"],
    button3: ["in", "enrolled", "our"],
    button4: ["Ahmedabad", "in", "third"],
    button5: ["Gujarat", "CMPA", "semester"]
  }
};

let selectedWords = {
  button1: "",
  button2: "",
  button3: "",
  button4: "",
  button5: ""
};

function cycleWords(buttonId, storyKey) {
  const currentWord = selectedWords[buttonId];
  const wordsArray = words[storyKey][buttonId];
  const newIndex = Math.floor(Math.random() * wordsArray.length);
  selectedWords[buttonId] = wordsArray[newIndex];
  document.getElementById(buttonId).innerText = wordsArray[newIndex];
}

function showStory() {
  const storyText = Object.values(selectedWords).join(" ");
  document.getElementById("storyText").innerText = storyText;
}

function generateRandomStory(storyKey) {
  for (const buttonId in selectedWords) {
    cycleWords(buttonId, storyKey);
  }
  showStory();
}

function resetStory() {
  for (const buttonId in selectedWords) {
    selectedWords[buttonId] = "";
    document.getElementById(buttonId).innerText = "Choose";
  }
  document.getElementById("storyText").innerText = "Make your selections to create a story.";
}
