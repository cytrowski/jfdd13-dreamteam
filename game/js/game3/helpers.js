export const backToMenu = () => {
  const hrefArr = document.location.href.split("/").map(el => el + "/");
  const slicedhref =
    hrefArr.slice(0, hrefArr.length - 2).join("") + "index.html";
  document.location.assign(slicedhref);
};

export const removeKeySupport = () =>
  document.removeEventListener("keydown", keySupport);

export const getBoardButtons = () => document.querySelectorAll(".board__btn");