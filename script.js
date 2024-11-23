const aboutButton = document.getElementById('about-btn');

aboutButton.addEventListener('mouseover', () => {
    const randomX = Math.random() * 200 - 100; 
    const randomY = Math.random() * 200 - 100; 
    
    aboutButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
    aboutButton.style.transition = 'transform 0.3s ease';
});

aboutButton.addEventListener('click', (event) => {
    
    event.preventDefault();
    alert("¿Cómo que no? Devuélvete a clickear el sí 🤨");
});
