const words = ["UI/UX Designer", "Product Designer", "UX Researcher"];
let target_word_index = 0;
let target_char_index = 0;
const target_element = document.getElementById("typing");
const toggleBtn = document.getElementById("toggleBtn");
const sidebarList = document.getElementById("sidebarList");



// Typing effect
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

// Start the typing animation
typeWord();



// Sidebar toggle
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("activeMenu");
});

// Remove class name from body on click
sidebarList.addEventListener("click", () => {
  document.body.classList.remove("activeMenu");
});

// Remove class name from body on scroll
window.addEventListener("scroll", () => {
  document.body.classList.remove("activeMenu");
});



// Form Submission
var form = document.getElementById("contactForm");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)