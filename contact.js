document.addEventListener('DOMContentLoaded', function() {
    const typeWriterEffect = (elementId, text, speed = 150) => {
        const element = document.getElementById(elementId);
        element.innerText = '';
        let index = 0;

        function typeWriter() {
            if (index < text.length) {
                element.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriter, speed);
            }
        }

        typeWriter();
    };

    typeWriterEffect('typewriter', 'contact');

});
