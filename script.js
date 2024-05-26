document.addEventListener('DOMContentLoaded', function() {
    const text = "somalia's blog";
    let index = 0;
    const speed = 200;

    function typeWriter() {
        if (index < text.length) {
            document.getElementById('typewriter').innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});
