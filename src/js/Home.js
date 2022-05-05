const Home = () => {
  const preparePage = () => {
    let articles = "";

    const fetchList = (url) => {
      let finalURL = url;
      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          response.results.forEach((article) => {
            articles += `
              <article class="card-game"> <a href="#pagedetail/${article.slug}">
                <div class="overlay">
                  <div class="text">
                    <h1>Nom du jeu : ${article.name}</h1>
                    <h2>Release-Date : ${article.released}</h2>
                  </div>
                </div>
                <div class="card-game__img__container">
                  <img src="${article.background_image}"> 
                </div>
              </a>
            </article>
          `;
          });
          document.querySelector(".page-list .articles").innerHTML = articles;
        })
        .catch((error) => console.log("Une erreur est survenue"));
    };

    fetchList(
      `https://api.rawg.io/api/games?key=${process.env.API_KEY}&dates=2022-03-01,2022-03-31&page_size=12`
    );
  };

  const render = () => {
    pageContent.innerHTML = `<div class="description">
      <h2>Some recent games released in 2022 :</h2>
    </div><br>
      <section class="page-list">
        <div class="articles">...loading</div>
      </section>
    `;

    preparePage();
  };

  render();
};

export { Home };
