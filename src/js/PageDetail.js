const apiKey = `?key=${process.env.API_KEY}`;

const PageDetail = (argument = "") => {
  console.log("Page Detail", argument);

  const preparePage = () => {
    const cleanedArgument = argument.replace(/\s+/g, "-");

    const fetchGame = (url, argument) => {
      let finalURL = url + argument + apiKey;
      console.log(finalURL);

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          let { name, released, description, background_image, rating, developers, platforms } = response;

          let articleDOM = document.querySelector(".page-detail .article");

          articleDOM.querySelector("h1.title")
          .innerHTML = name;
          articleDOM.querySelector("p.release-date")
          .innerHTML = `Release Date: ${released}`;
          articleDOM.querySelector(".descriptions")
          .innerHTML = description;
          articleDOM.querySelector("img")
          .src = background_image;
          articleDOM.querySelector(".ratings")
          .innerHTML = `Rating : ${rating}`       
          articleDOM.querySelector(".developers")
          .innerHTML = developers.map((d) => {
            return d.name + " "
          })
          articleDOM.querySelector(".platforms")
          .innerHTML = platforms.map((p) => {
            return p.platform.name + " / "
          })
    
        });
    };
    fetchGame(`https://api.rawg.io/api/games/`, cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-detail">
        <div class="article">
          <h1 class="title"></h1>
          <div class="image">
            <img src="" alt="game image">
          </div>
          <div class="release">
            <p class="release-date"></p>
          </div>
          <div class="descriptions">
            <p></p>
          </div>
          <div class="platforms">
            <p></p>
          </div>
          <div class="ratings">
            <p></p>
          </div>
          <div class="developers">
            <p></p>
          </div>
        </div>
      </section>
    `;

    preparePage();
  };

  render();
};

export { PageDetail };
