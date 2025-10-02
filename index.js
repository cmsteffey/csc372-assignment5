document.querySelectorAll('#player-choice > img').forEach(img => {
    img.addEventListener('click', (e) => {
        document.querySelectorAll("#player-choice > img").forEach((e) => e.classList.remove("clicked"));
        e.currentTarget.classList.add("clicked");
        let timerData = {count: 0, intervalId: 0}
        timerData.intervalId = setInterval((choiceNumber, timerData) => {
            if(++timerData.count === 6){
                clearInterval(timerData.intervalId);
                let computerResult = Math.floor(Math.random() * 3)
                document.querySelector("#computer-choice > img").src = document.querySelectorAll("#player-choice > img")[computerResult].src;
                let choiceDiff = ((choiceNumber - computerResult) % 3 + 3) % 3;
                document.querySelector("#results > h1").innerText = choiceDiff === 1 ? "You Win!" : choiceDiff === 2 ? "You Lose!" : "Tie!";
                document.getElementById("player-wins").innerText = "Player wins: " +
                    (parseInt(document.getElementById("player-wins").innerText.substring(document.getElementById("player-wins").innerText.indexOf(':') + 2))
                        + (choiceDiff === 1 ? 1 : 0));
                document.getElementById("computer-wins").innerText = "Computer wins: " +
                    (parseInt(document.getElementById("computer-wins").innerText.substring(document.getElementById("computer-wins").innerText.indexOf(':') + 2))
                        + (choiceDiff === 2 ? 1 : 0));
                document.getElementById("ties").innerText = "Ties: " +
                    (parseInt(document.getElementById("ties").innerText.substring(document.getElementById("ties").innerText.indexOf(':') + 2))
                        + (choiceDiff === 0 ? 1 : 0));
            } else {
                document.querySelector("#computer-choice > img").src = document.querySelectorAll("#player-choice > img")[timerData.count % 3].src;
            }
        }, 500, e.currentTarget.dataset.choiceNumber, timerData)
    })
})
document.getElementById("reset").addEventListener("click", (e) => {
    document.getElementById("player-wins").innerText = "Player wins: 0";
    document.getElementById("computer-wins").innerText = "Computer wins: 0";
    document.getElementById("ties").innerText = "Ties: 0";
})