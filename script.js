
// ===============================
// Elements
// ===============================

const loader = document.getElementById("loader");
const openBtn = document.getElementById("openBtn");
const mainPage = document.getElementById("mainPage");

const giftBox = document.querySelector(".gift-box");

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

const letter = document.querySelector(".letter");
const letterCover = document.querySelector(".letter-cover");
const message = document.getElementById("message");

const photoSlider = document.getElementById("photoSlider");

// ===============================
// Photos
// ===============================

const photos = [
    "images/photo1.webp",
    "images/photo2.webp",
    "images/photo3.webp",
    "images/photo4.webp",
    "images/photo5.jpg"
];

let currentPhoto = 0;

// ===============================
// Birthday Message
// ===============================

const birthdayMessage = `

إلى الشخص الذي كان وجوده في حياتي هدية لا تُقدّر… 🤍

لا أعرف كيف أصف لكِ كم أنا ممتنة لأنني عرفتكِ. هناك أشخاص يدخلون حياتنا بهدوء، دون أن يدركوا أنهم يتركون أثرًا لا يُنسى…  لم تكوني يومًا مجرد صديقة، بل كنتِ راحة وسط الزحام، وطمأنينة في الأوقات التي احتجت فيها إلى شيء جميل يخفف عني.

 وجودك وحده كان له تأثير كبير في حياتي، تأثير لم تطلبيه ولم تحاولي صنعه، لكنه حدث لأنكِ أنتِ… لأن روحك مختلفة، وقلبك يحمل شيئًا نادرًا لا يُشبه أحدًا.
أنتِ الشخص الذي أتمنى أن أراه دائمًا في أفضل حال، أن أراكِ سعيدة، محاطة بالحب، محققة لكل ما تتمنينه، لأنكِ تستحقين كل شيء جميل في هذا العالم.

معكِ عرفت معنى أن يكون الإنسان جميلًا من الداخل قبل الخارج، وأن يكون جمال الروح هو الشيء الذي يبقى مهما تغيّر كل شيء. عرفت أن هناك أشخاصًا لا يحتاجون إلى الكثير من الكلام ليتركوا أثرًا، يكفي فقط أن يكونوا موجودين.

أنتِ تشبهين نجمة وحيدة في سماءٍ خالية من النجوم… ليست لأنها الوحيدة فقط، بل لأنها الأكثر لمعانًا، لأنها قادرة على أن تجعل الظلام أقل قسوة بمجرد وجودها. ✨
 أتمنى أن تعرفي أنكِ شخص ثمين جدًا، وأن مكانتك في قلبي أكبر مما تستطيع الكلمات أن تصفه. شكرًا لأنكِ كنتِ أنتِ، وشكرًا لأن القدر منحني فرصة أن أعرف روحًا جميلة مثلكِ.

كل عام وأنتِ بخير يا أجمل صدفة وأغلى إنسانة 🤍
`;

// ===============================
// Open Gift
// ===============================

openBtn.addEventListener("click", () => {

    giftBox.classList.add("open");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

            mainPage.style.display = "block";

            createConfetti();
            createBalloons();

        }, 1000);

    }, 900);

});

// ===============================
// Music
// ===============================

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicBtn.textContent = "⏸ Pause";

    } else {

        music.pause();

        musicBtn.textContent = "🎵 Play Music";

    }

});

// ===============================
// Letter
// ===============================

letterCover.addEventListener("click", () => {

    letter.classList.add("open");

    typeMessage();

});

// ===============================
// Typewriter Effect
// ===============================

function typeMessage() {

    message.innerHTML = "";

    let i = 0;

    const timer = setInterval(() => {

        message.innerHTML += birthdayMessage.charAt(i);

        i++;

        if (i >= birthdayMessage.length) {

            clearInterval(timer);

        }

    }, 45);

}

// ===============================
// Photo Slider
// ===============================

setInterval(() => {

    currentPhoto++;

    if (currentPhoto >= photos.length) {

        currentPhoto = 0;

    }

    photoSlider.style.opacity = "0";
    photoSlider.style.transform = "scale(.95)";

    setTimeout(() => {

        photoSlider.src = photos[currentPhoto];

        photoSlider.style.opacity = "1";
        photoSlider.style.transform = "scale(1)";

    }, 400);

}, 3000);
// ===================================
// Floating Hearts
// ===================================

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.getElementById("heartsContainer").appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 7000);

}

setInterval(createHeart, 300);

// ===================================
// Balloons
// ===================================

function createBalloons() {

    const colors = [

        "#ff4d88",
        "#4da6ff",
        "#ffd93d",
        "#6bcB77",
        "#ff914d",
        "#b084ff"

    ];

    for (let i = 0; i < 15; i++) {

        const balloon = document.createElement("div");

        balloon.className = "balloon";

        balloon.style.left = Math.random() * 100 + "vw";

        balloon.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        balloon.style.animationDuration =
            (8 + Math.random() * 5) + "s";

        document.body.appendChild(balloon);

        setTimeout(() => {

            balloon.remove();

        }, 13000);

    }

}

// ===================================
// Confetti
// ===================================

function createConfetti() {

    const colors = [

        "#ff4d88",
        "#ffd93d",
        "#4da6ff",
        "#6bcB77",
        "#ffffff",
        "#ff914d"

    ];

    for (let i = 0; i < 220; i++) {

        const piece = document.createElement("div");

        piece.style.position = "fixed";
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.top = "-20px";

        piece.style.width = "8px";
        piece.style.height = "8px";

        piece.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.borderRadius = "50%";

        piece.style.zIndex = "99999";

        piece.style.transition =
            (3 + Math.random() * 3) + "s linear";

        document.body.appendChild(piece);

        setTimeout(() => {

            piece.style.transform =
                `translateY(${window.innerHeight + 150}px) rotate(720deg)`;

            piece.style.opacity = "0";

        }, 30);

        setTimeout(() => {

            piece.remove();

        }, 7000);

    }

}

// ===================================
// Repeat Effects
// ===================================

setInterval(() => {

    createConfetti();
    createBalloons();

}, 15000);

// ===================================
// Candle
// ===================================

const flame = document.querySelector(".flame");

if (flame) {

    flame.addEventListener("click", () => {

        flame.style.display = "none";

        setTimeout(() => {

            alert("🎂 Happy Birthday Manona! ❤️");

        }, 500);

    });

}

// ===================================
// Welcome Animation
// ===================================

window.addEventListener("load", () => {

    setTimeout(() => {

        document.body.style.opacity = "1";

    }, 300);

});

