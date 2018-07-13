window.addEventListener("DOMContentLoaded", function() {
  //===============================================================
  // custom select elements styling
  $("select").select2();
  //===============================================================
  // temporary link to file with data
  const URL = `//api.jsonbin.io/b/5b48b9c6efaed72daef1f0c8`;
  //===============================================================
  //shows content with search parameters
  function showContent(request) {
    axios.get(request)
    .then(function (response) {
      renderContent(response.data.posts);
    })
    .catch(err => console.log(err));
  }
  //===============================================================
  //creates all media content
  function renderContent(array) {
    let mainContent = document.createElement("main");
    mainContent.classList.add("content");
    document.querySelector(".container").appendChild(mainContent);
    let contentList = document.createElement("ul");
    contentList.classList.add("content__list");
    mainContent.appendChild(contentList);
    contentList.innerHTML = ('');
    let contentHTML = '';
    //render every single content item
    array.forEach(function (item) {
      console.log(item);
      let name = item.name;
      let options = item.options;
      let description = item.description;
      let category = item.category;
      let skils = item.skils;
      let clientCountry = item.client.country;
      let clientRating = item.client.rating;
      contentHTML += renderTemplate(name, options, description, category, skils, clientCountry, clientRating);
    });
    contentList.innerHTML = contentHTML;
  }
  //===============================================================
  // content item rendering
  let renderTemplate = (name, options, description, category, skils, clientCountry, clientRating) => {
    let templateHTML = '';
    templateHTML += `<li class="content__item">
                      <h2 class="content__title">${name}</h2>
                      <ul class="content__sublist options">
                      <li class="content__subitem separated">
                      <span class="content__subitem__description">fixed:</span>
                      <span class="content__subitem__value">${options["fixed"]}</span>
                      </li>
      <li class="content__subitem separated">
      <span class="content__subitem__description">budget: </span>
      <span class="content__subitem__value">$${options["budget"]}</span>
      </li>
      <li class="content__subitem separated">
      <span class="content__subitem__description">delivery: </span>
      <span class="content__subitem__value">${options["delivery"]}</span>
      </li>
      <li class="content__subitem separated">
      <span class="content__subitem__description">posted: </span>
      <span class="content__subitem__value">${options["posted"]}</span>
      </li>
      <li class="content__subitem separated">
      <span class="content__subitem__description">ends: </span>
      <span class="content__subitem__value">${options["ends"]}</span>
      </li>
      <li class="content__subitem">
      <span class="content__subitem__value blue">${options["proposals"]} </span>
      <span class="content__subitem__description blue">proposals</span>
      </li>
      </ul>
      <p class="content__description">
        <span class="content__description__text">
          ${description}
        </span>
        <a class="content__description__reference blue" href="" role="button">more</a>
      </p>
      <ul class="content__sublist">
        <li class="content__subitem separated">
          <span class="content__subitem__description">category: </span>
          <span class="content__subitem__value">${category}</span>
        </li>
        <li class="content__subitem">
          <span class="content__subitem__description">skills: </span>
          <ul class="content__sublist">`

          skils.forEach( (item) => {
            templateHTML += `<li class="content__subitem">
            <span class="content__subitem__tab">${item["name"]}</span>
            </li>`
          });

          templateHTML += `<li class="content__subitem">
          <a class="content__subitem__reference blue" href="" role="button">18 more</a>
          </li>
          </ul>
          </li>
        <li class="content__subitem">
          <span class="content__subitem__description">client: </span>
          <span class="content__subitem__value">${clientCountry}</span>
          <span class="content__subitem__rating">${clientRating}</span>
        </li>
      </ul>
    </li>`;
    return templateHTML;
  }
  //===============================================================
  showContent(URL);
});
