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
          let { name, released, description, background_image, rating, platforms } = response;

          let articleDOM = document.querySelector(".page-detail .article");

          articleDOM.querySelector("h1.title")
          .innerHTML = name;
          articleDOM.querySelector("p.release-date")
          .innerHTML = `Release Date: ${released}`;
          articleDOM.querySelector(".article-description")
          .innerHTML = description ? description : "Description undifined :(";
          articleDOM.querySelector("img")
          .src = background_image ? background_image : articleDOM.querySelector("img").style.background_image = "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
          articleDOM.querySelector(".ratings")
          .innerHTML = `Rating : ${rating}`       
          // articleDOM.querySelector(".developers")
          // .innerHTML = developers.map((d) => {
          //   return d.name + " "
          //})
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
          <div class="article-description">
            <p></p>
          </div>
          <div class="container-img">
          <div class="image">
                <img src="" alt="game image">
          </div>
            <div class="overlay">
              <div class="text"><p>Hello world</p></div>
              </div>
            </div>
          <div class="release">
            <p class="release-date"></p>
          </div>
          <div class="platforms">
            <p></p>
          </div>
          <div class="ratings">
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
