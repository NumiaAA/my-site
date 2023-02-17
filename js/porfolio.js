const portfolio = {
  renton: {
    title: "Renton Yard",
    description: "Описание",
    src: "../images/gallery/2.jpg",
    url: "https://renton-yard.ru",
  },
  delo: {
    title: "Барбершоп Delo",
    description: "Описание",
    src: "../images/gallery/3.jpg",
    url: "https://delobarbers.ru/m",
  },
};
function addItem() {
  const gallery = document.getElementById("gallery");
  for (let key in portfolio) {
    gallery.innerHTML += `<div class="col-md-4 item">
                <div class="de_modal wow" data-url="single-project.html">
                  <div class="card-image-1 mod-c" data-tilt>
                    <div class="d-text">
                      <h3>${portfolio[key].title}</h3>
                      <h5 class="d-tag">
                        ${portfolio[key].description}
                      </h5>
                    </div>
                    <img src="${
                      portfolio[key].src
                    }" class="img-fluid" alt="${portfolio[
      key
    ].title.toLowerCase()}" />
                  </div>
                </div>
              </div>`;
  }
}
addItem();
