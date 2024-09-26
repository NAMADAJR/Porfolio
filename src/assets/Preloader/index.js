export const preLoaderAnim = () => {
  const text = document.querySelector('.text-container h1');
  const preloader = document.querySelector('.preloader'); // Get the preloader element
  const letters = text.textContent.split(''); // Split the text into an array of letters
  
  text.innerHTML = ''; // Clear the text content
  
  letters.forEach((letter, idx) => {
    const span = document.createElement('span');
    span.textContent = letter;
    span.style.animationDelay = `${idx * 0.1}s`; // Delay based on the index of the letter
    text.appendChild(span);
  });

  // Trigger the wave-out effect after a delay (e.g., 2 seconds)
  setTimeout(() => {
    document.querySelectorAll('.text-container h1 span').forEach((span, idx) => {
      span.style.animation = `waveOut 0.5s ease forwards`;
      span.style.animationDelay = `${idx * 0.1}s`; // Same delay for the wave out
    });

    // Fade out the preloader after the wave-out finishes (e.g., 1.5s)
    setTimeout(() => {
      preloader.classList.add('fade-out'); // Add class to fade out the preloader
    }, 350); // Adjust timing to match the length of wave-out animation

  }, 4000); // Delay before triggering the wave-out effect
};

