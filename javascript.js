const form = document.querySelector('#form')
const submitButton = document.querySelector('#submit')

form.addEventListener('submit', (e) => {
  submitButton.disabled = true
  e.preventDefault()
  window.location.href = window.location.origin + '/success.html'
})

const toggleBtn = document.getElementById('toggleBtn');
const body = document.body;

// Toggle night mode on button click
toggleBtn.addEventListener('click', () => {
    body.classList.toggle('night-mode');
    // Save night mode preference in localStorage for persistence
    const isNightMode = body.classList.contains('night-mode');
    localStorage.setItem('nightMode', isNightMode);
});

// Check localStorage for night mode preference on page load
const nightMode = localStorage.getItem('nightMode');
if (nightMode === 'true') {
    body.classList.add('night-mode');
}