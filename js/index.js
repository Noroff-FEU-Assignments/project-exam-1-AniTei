const sliderWidth = document.querySelector(".slider-width");

const url = "http://thefoodplace.local/wp-json/wp/v2/posts/?per_page=12";

async function get12Posts() {
    const respond = await fetch(url);
    const data = await respond.json();

    for (let i = 0; i < data.length; i++) {
        sliderWidth.innerHTML += `
        <div class="item">
            <a href="specific-post.html?id=${data[i].id}">
                <h3>${data[i].title.rendered}</h3>
                <div class="carousel-content">${data[i].content.rendered}</div>

            </a>
        </div>`;
    }
}

get12Posts();

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const sliderContainer = document.querySelector(".slider-container");
const slider = document.querySelector(".slider-width");


let count = 0;

nextBtn.addEventListener("click", function moveSlider() {
    count = count - slider.offsetWidth / 3;
    if (-slider.offsetWidth < count) {
        slider.style.left = count + "px"
        nextBtn.disabled = false;
    }
})


prevBtn.addEventListener("click", function moveSlider() {
    count = count + slider.offsetWidth / 3;
    if (count < 5) {
        slider.style.left = count + "px";
        prevBtn.disabled = false;
    }
})






