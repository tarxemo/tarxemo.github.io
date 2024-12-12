/**
 * Function to create a grid of image pieces for an assembling effect.
 * @param {string} containerId - The ID of the container element.
 * @param {string} imageUrl - The URL of the image to assemble.
 * @param {number} pieceSize - The size of each image piece (in pixels).
 * @param {number} rows - The number of rows in the grid.
 * @param {number} cols - The number of columns in the grid.
 */
function createImageGrid(containerId, imageUrl, pieceSize, rows, cols) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with ID "${containerId}" not found.`);
        return;
    }

    // Set dynamic grid size
    container.style.gridTemplateColumns = `repeat(${cols}, ${pieceSize}px)`;
    container.style.gridTemplateRows = `repeat(${rows}, ${pieceSize}px)`;
    container.style.width = `${cols * pieceSize}px`;
    container.style.height = `${rows * pieceSize}px`;

    // Generate image pieces
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const piece = document.createElement('div');
            piece.classList.add('image-piece');
            piece.style.backgroundImage = `url(${imageUrl})`;
            piece.style.backgroundPosition = `-${col * pieceSize}px -${row * pieceSize}px`;
            piece.style.animationDelay = `${(row * cols + col) * 0.005}s`; // Staggered animation
            container.appendChild(piece);
        }
    }
}
