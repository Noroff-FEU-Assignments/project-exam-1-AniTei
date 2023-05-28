const listContainer = document.querySelector(".list-container");

const url = "http://thefoodplace.local/wp-json/wp/v2/posts";

async function get10Posts() {
    try {
        const respond = await fetch(url);
        const data = await respond.json();

        for (let i = 0; i < data.length; i++) {

            listContainer.innerHTML +=
                `<div class="list-grid">
                    <h2>${data[i].title.rendered}</h2>
                    <div class="list-img-container"> ${data[i].content.rendered}</div>
                    <p class="date">Published: ${data[i].date}</p>
                    <div class="text">${data[i].excerpt.rendered}</div>
                    <a href="specific-post.html?id=${data[i].id}">
                        <p class="button">read post</p>
                    </a>
                </div>`;
        }
    }
    catch (error) {
        console.log("OOOPSIE:/sjekk internettforbindelse!", error);
        listContainer.innerHTML = `<div class="error">OH NO, something went wrong 😢</div>`;
    }
}

get10Posts();





const morePostsContainer = document.querySelector(".list-more-posts-container");

const urlNext = url + "?page=2";


async function getNextPosts() {
    try {
        const respond = await fetch(urlNext);
        const data = await respond.json();

        for (let i = 0; i < data.length; i++) {

            morePostsContainer.innerHTML +=
                `<div class="list-grid">
                    <h2>${data[i].title.rendered}</h2>
                    <div class="list-img-container"> ${data[i].content.rendered}</div>
                    <p class="date">Published: ${data[i].date}</p>
                    <div class="text">${data[i].excerpt.rendered}</div>
                    <a href="specific-post.html?id=${data[i].id}">
                        <p class="button">read post</p>
                    </a>
                </div>`;
        }
    }
    catch (error) {
        console.log("OOOPSIE:/sjekk internettforbindelse!", error);
        morePostsContainer.innerHTML = `<div class="error">OH NO, something went wrong 😢</div>`;
    }
}

getNextPosts();


const moreResultsBtn = document.querySelector("#more-results-btn");

moreResultsBtn.addEventListener("click", function showMorePosts(){
morePostsContainer.style.display = "grid";
})



