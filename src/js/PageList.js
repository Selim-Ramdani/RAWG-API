const PageList = (argument = "") => {
  const preparePage = () => {
    const cleanedArgument = argument.replace(/\s+/g, "-");
    let articles = "";

    const fetchList = (url, argument) => {
      let finalURL = url;
      if (argument) {
        finalURL = url + "&search=" + argument;
      }

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          response.results.forEach((article) => {
            console.log(article);
            articles += `
              <article class="card-game">
                <div class="card-game__img__container">
                  <img src="${article.background_image}">
                  <h1>Nom du jeu : ${article.name}</h1>
                  <h2>Date de sortie : ${article.rating}</h2>
                  <a href="#pagedetail/${article.name}">${article.name}</a>

                </div>
              </article>
          `;
          });
          document.querySelector(".page-list .articles").innerHTML = articles;
        });
    };

    fetchList(
      `https://api.rawg.io/api/games?key=${process.env.API_KEY}`,
      cleanedArgument + "&page_size=12"
    );
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-list">
        <div class="articles">...loading</div>
      </section>
    `;

    preparePage();
  };

  render();
};

export { PageList };
