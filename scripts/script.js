let jokeDisplay = document.getElementById("jokeDisplay");

let getJokeBtn = document.getElementById("getJokeBtn");

const dadUrl = "https://icanhazdadjoke.com/";

getJokeBtn.addEventListener("click", function () {

    getDaddyJoke();

});

async function getDaddyJoke() {

    let dadJoke = await fetch(dadUrl, {
        headers: {
            Accept: "application/json",
        },
    }).then(Response => Response.json());


    console.log(dadJoke.joke);

    jokeDisplay.innerText = dadJoke.joke;



};


