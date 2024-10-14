// Get the button and link elements
const cvButton = document.getElementById('cv-button');
const cvLink = document.getElementById('cv-link');

// Add an event listener to the button
cvButton.addEventListener('click', () => {
  // Create a blob from the CV file
  const cvBlob = new Blob(['CV content here'], { type: 'application/pdf' });

  // Create a URL for the blob
  const cvUrl = URL.createObjectURL(cvBlob);

  // Set the href attribute of the link to the blob URL
  cvLink.href = cvUrl;

  // Simulate a click on the link to download the file
  cvLink.click();
});
// Handle form submission
// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Here you can handle the form data as you like
  // For demonstration, we'll just log it
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // Reset the form after submission
  this.reset();
  alert('Your message has been sent!');
});