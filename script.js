/* CREATE STARS */

const stars = document.getElementById("stars");

for (let i = 0; i < 100; i++) {

    const star = document.createElement("div");

    star.className = "star";
    star.innerHTML = "✦";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.fontSize =
        (5 + Math.random() * 12) + "px";

    star.style.animationDelay =
        Math.random() * 3 + "s";

    stars.appendChild(star);
}


/* DIWALI LIGHTS */

const lights = document.getElementById("lights");

for (let i = 0; i < 18; i++) {

    const bulb = document.createElement("div");

    bulb.className = "bulb";

    lights.appendChild(bulb);
}


/* PAGE NAVIGATION */

function nextPage(number) {

    // Start background music after the visitor's first click.
    const bgMusic = document.getElementById("bgMusic");
    if (bgMusic && bgMusic.paused) {
        bgMusic.volume = 0.5;
        bgMusic.play().catch(error => {
            console.log("Background music could not start:", error);
        });
    }


    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById("page" + number)
        .classList.add("active");

    document.getElementById("pageCounter").innerText =
        "Surprise " + number + " / 5 ❤️";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (number === 2 || number === 4) {
        createBalloons();
    }

    if (number === 4) {
        celebrate();
    }
}


/* FLOATING HEARTS AND FLOWERS */

const symbols = ["❤️", "💗", "💕", "🌸", "✨", "🌹"];

setInterval(() => {

    const item = document.createElement("div");

    item.className = "floating";

    item.innerHTML =
        symbols[Math.floor(Math.random() * symbols.length)];

    item.style.left = Math.random() * 100 + "vw";

    item.style.fontSize =
        (18 + Math.random() * 25) + "px";

    item.style.animationDuration =
        (7 + Math.random() * 6) + "s";

    document.body.appendChild(item);

    setTimeout(() => item.remove(), 14000);

}, 650);


/* BALLOONS */

function createBalloons() {

    const emojis = ["🎈", "🎈", "💗", "🎀"];

    for (let i = 0; i < 12; i++) {

        setTimeout(() => {

            const balloon = document.createElement("div");

            balloon.className = "balloon";

            balloon.innerHTML =
                emojis[Math.floor(Math.random() * emojis.length)];

            balloon.style.left = Math.random() * 100 + "vw";

            document.body.appendChild(balloon);

            setTimeout(() => balloon.remove(), 13000);

        }, i * 300);
    }
}


/* FIREWORKS */

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);


function createFirework(x, y) {

    const colors = [
        "#ff4fa3",
        "#ffd700",
        "#ffffff",
        "#ff7b54",
        "#b388ff"
    ];

    const color =
        colors[Math.floor(Math.random() * colors.length)];

    for (let i = 0; i < 65; i++) {

        const angle =
            Math.PI * 2 * i / 65;

        const speed =
            Math.random() * 5 + 2;

        particles.push({

            x: x,
            y: y,

            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,

            alpha: 1,
            color: color

        });
    }
}


function animateFireworks() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle, index) => {

        particle.x += particle.vx;
        particle.y += particle.vy;

        particle.vy += 0.025;
        particle.alpha -= 0.012;

        ctx.globalAlpha = Math.max(0, particle.alpha);

        ctx.fillStyle = particle.color;

        ctx.beginPath();

        ctx.arc(
            particle.x,
            particle.y,
            2.5,
            0,
            Math.PI * 2
        );

        ctx.fill();

        if (particle.alpha <= 0) {
            particles.splice(index, 1);
        }

    });

    ctx.globalAlpha = 1;

    requestAnimationFrame(animateFireworks);
}

animateFireworks();


function celebrate() {

    for (let i = 0; i < 7; i++) {

        setTimeout(() => {

            createFirework(
                Math.random() * canvas.width,
                Math.random() * canvas.height * 0.65
            );

        }, i * 350);

    }
}


/* OPEN FINAL LOVE LETTER */

let petalTimer;

function openFinalLetter() {

    const envelope =
        document.getElementById("envelopeArea");

    const content =
        document.getElementById("finalContent");

    envelope.style.display = "none";

    content.classList.add("visible");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    celebrate();

    startRosePetals();
}


/* ROSE PETAL ANIMATION */

function startRosePetals() {

    if (petalTimer) return;

    const petals = ["🌹", "🌸", "💗", "🌺"];

    petalTimer = setInterval(() => {

        const petal = document.createElement("div");

        petal.className = "petals";

        petal.innerHTML =
            petals[Math.floor(Math.random() * petals.length)];

        petal.style.left = Math.random() * 100 + "vw";

        petal.style.fontSize =
            (18 + Math.random() * 20) + "px";

        petal.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        document.body.appendChild(petal);

        setTimeout(() => petal.remove(), 11000);

    }, 500);
}
