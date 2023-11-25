const sleep = ms => new Promise(r => setTimeout(r, ms));

let color = 0;

async function sendMessage() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    var userInput = document.getElementById('userInput').value;
    var chatBox = document.getElementById('chatBox');
    // Append user message to the chat box
    for(let i = 0; i < 10; i++){
        await sleep(20); //delay is in milliseconds 
        if(color == 1){
            chatBox.innerHTML += '<t class="dots">.</t>';
        }else{
            chatBox.innerHTML += '.';
        }
    }
    chatBox.innerHTML += '<p class="answer">[' + hours + ':' + minutes + ':' + seconds + '] <br>User: ' + userInput + '<br>ChatGPT: This is a dummy response.<br><br></p>';
    // You can handle the user input here and generate a response using ChatGPT
    // For demonstration, let's add a dummy response
    // chatBox.innerHTML += '<p>ChatGPT: This is a dummy response.</p>--------------------------------<br><br>';
    // Clear the input field
    document.getElementById('userInput').value = '';

    chatBox.scrollTop = chatBox.scrollHeight;
    if(color == 0){
        color = 1;
    }else{
        color = 0;
    }
}

var userInput = document.getElementById('userInput').value;

document.getElementById("userInput")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("sendButton").click();
    }
});