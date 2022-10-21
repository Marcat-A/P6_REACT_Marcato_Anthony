function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price, id } = data;

  const picture = `assets/photographers/${portrait}`;
  const url = `photographer.html?id=${id}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("aria-label", name);
    link.classList.add("link");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", name);
    img.classList.add("img");
    const h2 = document.createElement("h2");
    h2.textContent = name;
    h2.classList.add("name");
    const h3 = document.createElement("h3");
    h3.textContent = city + ", " + country;
    h3.classList.add("city");
    const span1 = document.createElement("span");
    span1.textContent = tagline;
    span1.classList.add("paragraph");
    const span2 = document.createElement("span");
    span2.textContent = price + "€/jour";
    span2.classList.add("price");
    article.appendChild(link);
    link.appendChild(img);
    link.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(span1);
    article.appendChild(span2);
    return article;
  }
  return { name, picture, getUserCardDOM };
}
