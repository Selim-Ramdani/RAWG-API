import './style/index.scss';
import { Home } from './js/Home';
import { PageList } from './js/PageList';
import { PageDetail } from './js/PageDetail';
import { routes } from "./js/routes";

let pageArgument;

const callRoute = () => {
  const path = window.location.hash.substring(1).split("/");
  pageArgument = path[1] || "";
  const pageContent = document.getElementById("pageContent");
  routes[path[0]](pageArgument);
  return true;
};

const searchGame = () => {
  const input = document.getElementById("input-search");
  input.addEventListener("keydown", function (event) {
    if (event.keyCode == 13) {
      let gameToSearch = input.value;
      gameToSearch = gameToSearch.replace(/\s+/g, "-");
      window.location.href = `#pagelist/${gameToSearch}`;
    }
  });
};
searchGame();
window.addEventListener('hashchange', () => callRoute());
window.addEventListener('DOMContentLoaded', () => callRoute());