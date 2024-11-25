
fetch('sidebar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('top-nav').innerHTML = data;
    });
fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML=data;
    });
    