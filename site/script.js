const words = ["UI/UX Designer", "Product Designer", "UX Researcher"];
let target_word_index = 0;
let target_char_index = 0;
const target_element = document.getElementById("typing");
const toggle_btn = document.getElementById("toggle_btn");
console.log(target_element);

function typeWord() {
  const target_word = words[target_word_index];

  if (target_char_index < target_word.length) {
    target_element.textContent += target_word.charAt(target_char_index);
    target_char_index++;
    setTimeout(typeWord, 100);
  } else {
    setTimeout(clearOutput, 1000);
  }
}

function clearOutput() {
  target_element.textContent = "";
  target_char_index = 0;
  target_word_index = (target_word_index + 1) % words.length;
  setTimeout(typeWord, 500);
}

toggle_btn.addEventListener("click", () => {
  document.body.classList.toggle("color_body");
});

// Start the typing animation
typeWord();