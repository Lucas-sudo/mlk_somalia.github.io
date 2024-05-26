document.addEventListener('DOMContentLoaded', function() {
    const text = document.getElementById('typewriter').innerText;
    document.getElementById('typewriter').innerText = '';
    let index = 0;
    const speed = 150;

    function typeWriter() {
        if (index < 6) {
            document.getElementById('typewriter').innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});
