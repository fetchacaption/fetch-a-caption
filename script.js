function generateCaption() {
  const prompt = document.getElementById('prompt').value;
  const output = document.getElementById('captionOutput');
  if (!prompt) {
    output.textContent = 'Please describe the pet photo first!';
    return;
  }
  output.textContent = 'Fetching your paw-some caption...';
  setTimeout(() => {
    output.textContent = 'Here’s a fun caption: "' + prompt + ' but make it fluffy and fabulous!"';
  }, 1000);
}