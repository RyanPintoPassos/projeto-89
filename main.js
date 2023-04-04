
function addUser() {
    player1Name = document.getElementById("player1NameInput").value;
    player2Name = document.getElementById("player2NameInput").value;

    localStorage.getItem("player1Name", player1Name);
    localStorage.getItem("player2Name", player2Name);

    window.location = "game_page.html";
}