function loadScript(src, callback) {
    const script = document.createElement("script");
    script.src = src; // Set the source of the script
    script.type = "text/javascript"; // Optional, defaults to JavaScript
    script.async = true; // Load asynchronously
    script.onload = () => {
        console.log(`${src} loaded successfully.`);
        if (callback) callback(); // Execute callback if provided
    };
    script.onerror = () => {
        console.error(`Failed to load script: ${src}`);
    };
    document.head.appendChild(script); // Add script to the head or body
}

fetch('sidebar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('top-nav').innerHTML = data;

        // Load navigation scripts after the sidebar is loaded
        loadScript('./js/mibileNavigation.js');
        loadScript('./js/navDropdown.js');
    })
    .catch(error => console.error('Error loading sidebar:', error));

fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));
