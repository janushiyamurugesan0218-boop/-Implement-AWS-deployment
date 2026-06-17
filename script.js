// JavaScript functionality
document.getElementById('cloudBtn').addEventListener('click', () => {
    const outputDiv = document.getElementById('output');
    
    // Simulate a successful cloud execution message
    outputDiv.textContent = "🚀 App is running smoothly from the cloud!";
    outputDiv.style.color = "#4edf7a";
    
    // Simple console log to verify execution in browser dev tools
    console.log("JavaScript event listener triggered successfully.");
});