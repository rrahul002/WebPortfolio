document.addEventListener("DOMContentLoaded", function () {
    const loadingVideo = document.getElementById("loading-video");
    const mainContent = document.querySelector(".main-content");
    const body = document.getElementById("body");
    
    // Play the video automatically
    loadingVideo.play();
    mainContent.style.display = "none";
    
    // Hide the video and reveal the main content after 5 seconds
    setTimeout(function () {
        loadingVideo.style.display = "none"; // Hide the video
        mainContent.style.display = "block"; // Show the main content
        body.style.backgroundColor = "white";
    }, 5010);
});