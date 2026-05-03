const content = document.getElementById("content");
const progress = document.getElementById("progress");
const scoreText = document.getElementById("score");

let score = 0;

function updateScore(points){
    score += points;
    scoreText.innerText = score;
}

function updateProgress(value){
    progress.style.width = value + "%";
}

function startGame(){

    updateProgress(25);

    content.innerHTML = `

    <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop">

    <h2>Scenario 1</h2>

    <p>
    Du modtager en mail fra “SU-styrelsen”.
    </p>

    <p>
    Mailen siger at din SU bliver stoppet hvis du ikke logger ind med det samme.
    </p>

    <p>
    Hvad gør du?
    </p>

    <button onclick="badChoice1()">
    Klik på linket
    </button>

    <button onclick="goodChoice1()">
    Tjek afsenderen først
    </button>

    `;
}

function badChoice1(){

    updateProgress(100);

    content.innerHTML = `

    <img src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1200&auto=format&fit=crop">

    <h2 class="bad">
    Du blev hacket
    </h2>

    <p>
    Linket var falskt og dine oplysninger blev stjålet.
    </p>

    <p>
    Mange phishing-mails prøver at skabe panik så folk handler hurtigt.
    </p>

    <button onclick="restart()">
    Start igen
    </button>

    `;
}

function goodChoice1(){

    updateScore(10);
    updateProgress(50);

    content.innerHTML = `

    <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop">

    <h2 class="good">
    Godt valg
    </h2>

    <p>
    Du opdager at mailadressen er falsk.
    </p>

    <p>
    Senere får du en besked på Messenger fra en ven.
    </p>

    <p>
    Vennen sender et Google Drive-link.
    </p>

    <button onclick="badChoice2()">
    Åbn linket
    </button>

    <button onclick="goodChoice2()">
    Spørg vennen først
    </button>

    `;
}

function badChoice2(){

    updateProgress(100);

    content.innerHTML = `

    <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop">

    <h2 class="bad">
    Malware installeret
    </h2>

    <p>
    Linket downloadede skadelig software til din computer.
    </p>

    <p>
    Hackede konti bruges ofte til at sprede malware videre.
    </p>

    <button onclick="restart()">
    Start igen
    </button>

    `;
}

function goodChoice2(){

    updateScore(10);
    updateProgress(75);

    content.innerHTML = `

    <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop">

    <h2 class="good">
    Du tænker dig om
    </h2>

    <p>
    Din ven fortæller at hans konto faktisk blev hacket.
    </p>

    <p>
    Nu logger du ind på skolens platform fra en offentlig computer.
    </p>

    <button onclick="badChoice3()">
    Gem adgangskode i browseren
    </button>

    <button onclick="goodEnding()">
    Log ud bagefter
    </button>

    `;
}

function badChoice3(){

    updateProgress(100);

    content.innerHTML = `

    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop">

    <h2 class="bad">
    Konto kompromitteret
    </h2>

    <p>
    Næste person på computeren fik adgang til din konto.
    </p>

    <button onclick="restart()">
    Start igen
    </button>

    `;
}

function goodEnding(){

    updateScore(10);
    updateProgress(100);

    content.innerHTML = `

    <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1200&auto=format&fit=crop">

    <h2 class="good">
    Du gennemførte sikkert
    </h2>

    <p>
    Du tog sikre valg gennem hele scenariet.
    </p>

    <p>
    Små handlinger kan gøre en stor forskel for datasikkerhed.
    </p>

    <p>
    Din samlede score:
    <strong>${score}</strong>
    </p>

    <button onclick="restart()">
    Spil igen
    </button>

    `;
}

function restart(){
    location.reload();
}