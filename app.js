// Function to change background color when the button is clicked
document.getElementById('colorChangeButton').addEventListener('click', function() {
    const colors = ['#f4f4f9', '#ffebcd', '#e0ffff', '#f0e68c', '#ffb6c1', '#d3d3d3'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
