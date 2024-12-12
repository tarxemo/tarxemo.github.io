function createSlidingPanels(containerId, imageUrl, numPanels = 5, animationDelayStep = 0.2) {
    const container = document.getElementById(containerId);
    const panelHeight = 100 / numPanels; // Height of each panel as a percentage

    for (let i = 0; i < numPanels; i++) {
        const panel = document.createElement('div');
        panel.classList.add('panel');
        panel.style.backgroundImage = `url(${imageUrl})`; // Set the background image
        panel.style.backgroundPosition = `0 -${i * (500 / numPanels)}px`; // Adjust based on image height
        panel.style.top = `${i * panelHeight}%`; // Position the panel vertically
        panel.style.animationDelay = `${i * animationDelayStep}s`; // Staggered animation delay
        container.appendChild(panel);
    }
}
