const sleep = ms => new Promise(r => setTimeout(r, ms));

async function drawDots(root, isColored){
    const newElement = document.createElement("p");
    newElement.classList.add("dots_wrapper");
    if(isColored) newElement.classList.add("dots_wrapper_bg");
    root.appendChild(newElement);
    newElement.innerHTML += 'Loading'
    for(let i = 0; i < 10; i++){
        await sleep(100); //delay is in milliseconds 
        newElement.innerHTML += '.';
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }

let color = 0;
let count = 0;
let superstring = "";

async function sendMessage() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    var userInput = document.getElementById('userInput').value;
    var chatBox = document.getElementById('chatBox');

    if(count % 2 === 0){
        await drawDots(chatBox, true);
        chatBox.innerHTML += '<p style="background: #5e5c73;">[' + hours + ':' + minutes + ':' + seconds + '] <br>User: ' + userInput + '<br>ChatGPT: This is a dummy response.<br><br></p>';
    }else{
        await drawDots(chatBox, false);
        chatBox.innerHTML += '<p>[' + hours + ':' + minutes + ':' + seconds + '] <br>User: ' + userInput + '<br>ChatGPT: This is a dummy response.<br><br></p>';

    }
    superstring += '[' + hours + ':' + minutes + ':' + seconds + '] \nUser: ' + userInput + '\nChatGPT: This is a dummy response.\n\n';
   

    //chatBox.innerHTML += '<p class="answer">[' + hours + ':' + minutes + ':' + seconds + '] <br>User: ' + userInput + '<br>ChatGPT: This is a dummy response.<br><br></p>';
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

    count++;
}

async function downloadTXT() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    download('[' + hours + '-' + minutes + '-' + seconds + '] ' + 'output.txt', superstring);
}

var userInput = document.getElementById('userInput').value;

document.getElementById("userInput")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("sendButton").click();
    }
});