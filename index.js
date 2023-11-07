const img = document.getElementById("img");
let slides = ["./assests/swift.webp", "./assests/toyota.webp"];
let start = 0;

function slider() {
  if (start < slides.length) {
    start = start + 1;
  } else {
    start = 1;
  }

  img.innerHTML = "<img src=" + slides[start - 1] + ">";
}
setInterval(slider, 5000);

// reviews

const rm = document.getElementById("rm");
const h3 = document.getElementById("h3");
const h5 = document.getElementById("h5");
const p = document.getElementById("p");
let s = 0;
let arr = [
  {
    image: "./assests/person1.jpg",
    name: "Annie",
    Rating: "★★★★",
    review:
      "  Carzz is best platform it has helped me to buy seconds car and the service they provide here is awesome and great. I recommend this platform",
  },
  {
    image: "./assests/person3.jpg",
    name: "Marry",
    Rating: "★★★★★",
    review:
      "Carzz made buying a car a breeze. The sales team was knowledgeable and helped me find the perfect car that fit my budget. They provided a detailed history of the vehicle, and the paperwork was quick and hassle-free. The car has been running great, and I've had no issues.",
  },
  {
    image: "./assests/persons2.jpg",
    name: "Micheal",
    Rating: "★★★☆☆",
    review:
      "Carzz repair work and the service they provide is quite good compared to other platforms. ",
  },
];

function reviews() {
  if (s < arr.length) {
    s = s + 1;
  } else {
    s = 1;
  }

  rm.innerHTML = "<img src=" + arr[s - 1].image + ">";
  h3.innerText = `${arr[s - 1].name}`;
  h5.innerText = `${arr[s - 1].Rating}`;
  p.innerText = `${arr[s - 1].review}`;
}

setInterval(reviews, 5000);

const display = document.getElementById("display");

const icon = document.getElementById("icon");
const ul = document.querySelector(".navul");

icon.addEventListener("click", () => {
  display.classList.toggle("display");
});
