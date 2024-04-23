let jokeDisplay = document.getElementById("jokeDisplay");

let getJokeBtn = document.getElementById("getJokeBtn");

const dadUrl = "https://icanhazdadjoke.com/";

getJokeBtn.addEventListener("click", function (){

      getDaddyJoke();
    
  });

  async function getDaddyJoke(){
    // stuff inside to do a fetch and apiResponse to then save to json format
    let apiResponse = await fetch(dadUrl, {
        headers: {
            Accept:"application/json",
        },
    }).then(Response => Response.json());
    console.log(apiResponse.joke);

    
};

