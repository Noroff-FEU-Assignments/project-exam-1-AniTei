const specContainer = document.querySelector(".spec-container");
const specTitle = document.querySelector(".spec-title");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const idPost = params.get("id");

const url = "http://thefoodplace.local/wp-json/wp/v2/posts/" + idPost;

async function findPost() {
    try {
        const respond = await fetch(url)
        const data = await respond.json();

        specContainer.innerHTML += `<h1>${data.title.rendered}</h1>
                                        <p class="date">Published: ${data.date}</p>

                                        <div class="spec-content">${data.content.rendered}</div>`;

        specTitle.innerHTML = `${data.title.rendered}`;

        const modalTrigger = document.querySelector(".wp-block-image");
        const modalDiv = document.querySelector(".modal")

        modalDiv.innerHTML = `<div>${data.content.rendered}</div>`;

        modalTrigger.addEventListener("click", function showModal() {
            modalDiv.style.display = "block";
        })

        modalDiv.addEventListener("click", function hideModal() {
            modalDiv.style.display = "none";
        })
    }

    catch (error) {
        console.log("OOOPSIE:/sjekk internettforbindelse!", error);
        detailsContent.innerHTML = `<div class="error">OH NO, something went wrong 😢</div>`;
    }
}

findPost();

