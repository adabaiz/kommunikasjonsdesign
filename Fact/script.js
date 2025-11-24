function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.top >= 0 && rect.bottom <= window.innerHeight)
    );
}

document.addEventListener('scroll', () => {
    const bg = document.getElementById("changingBg");

    if (isInViewport(document.getElementById("bg1"))) {
        bg.style.backgroundImage = "url('https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?q=80&w=2070&auto=format&fit=crop')";
    }
    if (isInViewport(document.getElementById("bg2"))) {
        bg.style.backgroundImage = "url('https://images.unsplash.com/photo-1430285561322-7808604715df?q=80&w=2070&auto=format&fit=crop')";
    }
    if (isInViewport(document.getElementById("bg3"))) {
        bg.style.backgroundImage = "url('https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=2070&auto=format&fit=crop')";
    }
    if (isInViewport(document.getElementById("bg4"))) {
        bg.style.backgroundImage = "url('https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2070&auto=format&fit=crop')";
    }
});