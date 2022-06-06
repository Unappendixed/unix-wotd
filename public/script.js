async function getWords() {
  const response = await fetch("./words_alpha_shuffled.json");
  const data = await response.json();
  return data;
}

function updateSeconds() {
  return Math.round(Date.now() / 1000);
}

async function pickWord() {
  const words = await getWords();
  const unixString = updateSeconds().toString().slice(5);
  const wordIndex = parseInt(unixString)
  return words[wordIndex]
}

async function updateTime() {
  const paragraph = document.querySelector("#unix-time")
  const seconds = updateSeconds();
  paragraph.innerText = seconds;
  if (seconds.toString().slice(-1) === "0") {
    await updateWord()
  }
}

async function updateWord() {
  const word = document.querySelector("#word");
  const link = document.querySelector("#link");
  const chosenWord = await pickWord();
  word.innerText = chosenWord
  link.setAttribute("href", `https://en.wiktionary.org/wiki/${chosenWord}`)
}

updateTime()
updateWord()

setInterval(updateTime, 1000)
