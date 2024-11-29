const sectionData = {
  perPage: 1,
  datas: [
    {
      text: "Exquisite Watches",
      subText: "Gold Luxury, Choose Us",
      description:
        "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
      price: "$499.00",
      image: "./imgs/watch1.png",
      ambientColor: "#f4aa69",
      ambientColor1: "#fedabb",
    },
    {
      text: "Dainty Timepieces",
      subText: "Silver Luxury, Choose Us",
      description:
        "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
      price: "$469.00",
      image: "./imgs/watch2.png",
      ambientColor: "#b2b4b4",
      ambientColor1: "#e1e1e1",
    },
    {
      text: "Elegant Timepieces",
      subText: "Choose Luxury, Choose Us",
      description:
        "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
      price: "$529.00",
      image: "./imgs/watch3.png",
      ambientColor: "#39ab60",
      ambientColor1: "#65d48b",
    },
    {
      text: "Refined Timepieces",
      subText: "Choose Luxury, Choose Us",
      description:
        "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
      price: "$599.00",
      image: "./imgs/watch4.png",
      ambientColor: "#f45b59",
      ambientColor1: "#fe9e8d",
    },
  ],
};

const carouselTitle = document.getElementById("carousel-title");
const carouselSubtext = document.getElementById("carousel-subtext");
const carouselDescription = document.getElementById("carousel-description");
const carouselPrice = document.getElementById("carousel-price");
const splideElement = document.getElementById("splide-carousel");

const splideList = splideElement.querySelector(".splide__list");

// Dynamically generate Splide slides and text
sectionData.datas.forEach((item) => {
  // Add slide
  const slide = document.createElement("li");
  slide.className = "splide__slide";
  slide.innerHTML = `<img src="${item.image}" alt="Watch">`;
  splideList.appendChild(slide);
});

const splide = new Splide("#splide-carousel", {
  type: "loop",
  perPage: sectionData.perPage,
  pagination: false,
  arrows: true,
}).mount();

// Update content dynamically based on active slide
splide.on("move", (index) => {
  const data = sectionData.datas[index];
  carouselTitle.textContent = data.text;
  carouselSubtext.innerHTML = `${data.subText.split(",")[0]}, <span>${data.subText.split(",")[1]}</span>`;
  carouselDescription.textContent = data.description;
  carouselPrice.textContent = data.price;

  document.body.style.background = `linear-gradient(to right, ${data.ambientColor}, ${data.ambientColor1})`;
});

// Initialize with the first data
splide.emit("move", 0);
