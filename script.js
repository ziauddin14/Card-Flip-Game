var container = document.querySelector(".card-container");

var message = document.getElementById("msg");
function flipCards() {
  var random = Math.ceil(Math.random() * 3);

  resetCards();
  if (random === 1) {
    document.getElementById(
      "card1"
    ).innerHTML = `<div class="card-front animate__animated animate__flipInY">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9aX59FzrEg-E9iWOdu7YjmJpV_uQA1zcL2w&s" alt="King" />
                </div>`;
    document.getElementById(
      "card2"
    ).innerHTML = `<div class="card-front animate__animated animate__flipInY">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9aX59FzrEg-E9iWOdu7YjmJpV_uQA1zcL2w&s" alt="King" />
                </div>`;
    document.getElementById(
      "card3"
    ).innerHTML = `<div class="card-front animate__animated animate__flipInY">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9aX59FzrEg-E9iWOdu7YjmJpV_uQA1zcL2w&s" alt="King" />
                </div>`;
    displayFinalWinner("Congratulations! You won the game!");
  } else if (random === 3) {
    document.getElementById(
      "card1"
    ).innerHTML = `<div class="card-front animate__animated animate__flipInY">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe2Z1Ds5wmRPCDZZh21NKrzyUiDdhwkW0PGQ&s" alt="Joker" />
                </div>`;
    document.getElementById(
      "card2"
    ).innerHTML = `<div class="card-front animate__animated animate__flipInY">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe2Z1Ds5wmRPCDZZh21NKrzyUiDdhwkW0PGQ&s" alt="Joker" />
                </div>`;
    document.getElementById(
      "card3"
    ).innerHTML = `<div class="card-front animate__animated animate__flipInY">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe2Z1Ds5wmRPCDZZh21NKrzyUiDdhwkW0PGQ&s" alt="Joker" />
                </div>`;
    displayFinalWinner("Oops! You lost the game!");
  } else if (random === 2) {
    document.getElementById(
      "card1"
    ).innerHTML = `<div class="card-front animate__animated animate__flipInY">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCNDTwQtn_FTfjNN_66AFVRzXPpuKbzYih0Q&s" alt="Ekky" />
                </div>`;
    document.getElementById(
      "card2"
    ).innerHTML = `<div class="card-front animate__animated animate__flipInY">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCNDTwQtn_FTfjNN_66AFVRzXPpuKbzYih0Q&s" alt="Ekky" />
                </div>`;

    document.getElementById(
      "card3"
    ).innerHTML = `<div class="card-front animate__animated animate__flipInY">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCNDTwQtn_FTfjNN_66AFVRzXPpuKbzYih0Q&s" alt="Ekky" />
                </div>`;
    displayFinalWinner("Okey! let's play again");
  }
}

function resetCards() {
  document.getElementById("card1").innerHTML = `
  <div class="card-back">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvf7f2fLe4YjFau1PBOtDaZ3TFtsp0ZWEe-w&s" alt="Card Back" />
  </div>`;

  document.getElementById("card2").innerHTML = `
  <div class="card-back">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvf7f2fLe4YjFau1PBOtDaZ3TFtsp0ZWEe-w&s" alt="Card Back" />
  </div>`;

  document.getElementById("card3").innerHTML = `
    <div class="card-back">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvf7f2fLe4YjFau1PBOtDaZ3TFtsp0ZWEe-w&s" alt="Card Back" />
    </div>`;

  message.style.display = "none";
}

var displayFinalWinner = (messageText) => {
  message.style.display = "block";
  message.innerHTML = messageText;
};
