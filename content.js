setInterval(() => {
    let skipButton = document.querySelector(".ytp-ad-skip-button, .ytp-ad-skip-button-modern");
    if (skipButton) {
        skipButton.click(); // Click the "Skip Ad" button
    }

    let video = document.querySelector("video");
    let adPlaying = document.querySelector(".ad-showing"); // Detects if an ad is playing

    if (video) {
        if (adPlaying) {
            video.muted = true; // Mute only during the ad
        } else {
            video.muted = false; // Unmute after the ad ends
        }
    }
}, 500); // Runs every 0.5 seconds
