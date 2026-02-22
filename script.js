function toggle() {
    document.body.classList.toggle("dark");

    const btn = document.querySelector(".toggle");
    btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
}

const cards = document.querySelectorAll(".card");

const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.25 });

cards.forEach(card => obs.observe(card));