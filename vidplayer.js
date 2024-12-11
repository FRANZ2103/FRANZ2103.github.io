 // Function to toggle mobile navigation menu
 function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

// JavaScript for video player functionality - can be moved to a separate JS file
const video = document.querySelector('.video');
const playPauseButton = document.getElementById('play-pause');
const progressBar = document.querySelector('.progress-bar');
const progress = progressBar.querySelector('span');
const currentTimeElement = document.getElementById('current-time');
const totalTimeElement = document.getElementById('total-time');

// Format time helper function
const formatTime = (time) => {
const minutes = Math.floor(time / 60);
const seconds = Math.floor(time % 60).toString().padStart(2, '0');
return `${minutes}:${seconds}`;
};

// Play/Pause functionality
playPauseButton.addEventListener('click', () => {
if (video.paused) {
video.play();
playPauseButton.innerHTML = '&#10074;&#10074;'; // Pause icon
} else {
video.pause();
playPauseButton.innerHTML = '&#9658;'; // Play icon
}
});

// Update progress bar and time
video.addEventListener('timeupdate', () => {
const currentTime = video.currentTime;
const duration = video.duration;
progress.style.width = `${(currentTime / duration) * 100}%`;
currentTimeElement.textContent = formatTime(currentTime);
});

// Update total time when video metadata is loaded
video.addEventListener('loadedmetadata', () => {
totalTimeElement.textContent = formatTime(video.duration);
});

// Seek functionality
progressBar.addEventListener('click', (e) => {
const rect = progressBar.getBoundingClientRect();
const offsetX = e.clientX - rect.left;
const width = rect.width;
const duration = video.duration;
video.currentTime = (offsetX / width) * duration;
});
const volumeSlider = document.getElementById('volume-slider');

// Adjust the video volume based on the slider's value
volumeSlider.addEventListener('input', () => {
video.volume = volumeSlider.value;
});
// Toggle play/pause when the video itself is clicked
video.addEventListener('click', () => {
if (video.paused) {
video.play();
playPauseButton.innerHTML = '&#10074;&#10074;'; // Pause icon
} else {
video.pause();
playPauseButton.innerHTML = '&#9658;'; // Play icon
}
});
const fullscreenButton = document.getElementById('fullscreen');

fullscreenButton.addEventListener('click', () => {
const videoPlayer = video.parentElement; // Select the video player container
if (!document.fullscreenElement) {
// Request fullscreen for the video player only
videoPlayer.requestFullscreen().catch(err => {
console.error(`Failed to enable fullscreen mode: ${err.message}`);
});
} else {
// Exit fullscreen
document.exitFullscreen().catch(err => {
console.error(`Failed to exit fullscreen mode: ${err.message}`);
});
}
});
const rewindButton = document.getElementById('rewind');
const forwardButton = document.getElementById('forward');

// Rewind 10 seconds
rewindButton.addEventListener('click', () => {
video.currentTime = Math.max(0, video.currentTime - 10);
});

// Forward 10 seconds
forwardButton.addEventListener('click', () => {
video.currentTime = Math.min(video.duration, video.currentTime + 10);
});
const videoPlayer = document.querySelector('.video-player');
const controls = document.querySelector('.controls');
let controlsTimeout;

// Function to show controls
const showControls = () => {
controls.classList.remove('hidden');
if (controlsTimeout) {
clearTimeout(controlsTimeout);
}
controlsTimeout = setTimeout(hideControls, 3000); // Hide after 3 seconds
};

// Function to hide controls
const hideControls = () => {
if (!videoPlayer.matches(':hover')) {
controls.classList.add('hidden');
}
};

// Show controls when the mouse moves over the video player
videoPlayer.addEventListener('mousemove', showControls);

// Prevent hiding when hovering over controls
controls.addEventListener('mouseenter', () => {
if (controlsTimeout) {
clearTimeout(controlsTimeout);
}
});

// Resume hiding when leaving the controls
controls.addEventListener('mouseleave', () => {
controlsTimeout = setTimeout(hideControls, 3000);
});

// Initially hide controls after a delay
controlsTimeout = setTimeout(hideControls, 3000);
// Ensure progress bar clicks are responsive on touch devices
progressBar.addEventListener('touchstart', (e) => {
const rect = progressBar.getBoundingClientRect();
const offsetX = e.touches[0].clientX - rect.left;
const width = rect.width;
const duration = video.duration;
video.currentTime = (offsetX / width) * duration;
});
// Play/Pause using spacebar
document.addEventListener('keydown', (event) => {
if (event.code === 'Space') {
event.preventDefault(); // Prevent page scrolling
if (video.paused) {
video.play();
playPauseButton.innerHTML = '&#10074;&#10074;'; // Pause icon
} else {
video.pause();
playPauseButton.innerHTML = '&#9658;'; // Play icon
}
}
});
