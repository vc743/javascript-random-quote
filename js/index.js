const author = document.querySelector(".author");
const quote = document.querySelector(".quote");
const tagsContainer = document.getElementById("tags-container");
const generateQuoteBtn = document.querySelector(".generate-quote");
const copyBtn = document.querySelector(".copy-btn");

function addTagsToContainer(tags) {
    tagsContainer.textContent = '';
  
    tags.forEach(tag => {
      const tagElement = document.createElement("li");
      tagElement.classList.add("tag");
      tagElement.textContent = tag;
      tagsContainer.appendChild(tagElement);
    });
}

function loadRandomQuote() {
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data => {
        author.textContent = data.author;
        addTagsToContainer(data.tags);
        quote.textContent = data.content;
    })
    .catch(error => {
        console.log(error);
    })
}
loadRandomQuote();

generateQuoteBtn.addEventListener("click", loadRandomQuote);

copyBtn.addEventListener('click', () => {
	let text = `${quote.textContent}`;
    navigator.clipboard.writeText(text)
        .then(() => {
            alert(`Quote by ${author.textContent} copied to clipboard!!`);
        })
        .catch(error => {
            console.error('Error copying to clipboard:', error);
        });
});
