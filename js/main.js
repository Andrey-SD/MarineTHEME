const modelsContainer = document.getElementById('models-container');

makers.sort((a, b) => {
  const nameA = a["maker-name"].toLowerCase();
  const nameB = b["maker-name"].toLowerCase();
  if (nameA < nameB) {
    return -1; // a повинно йти перед b
  }
  if (nameA > nameB) {
    return 1; // b повинно йти перед a
  }
  return 0; // якщо рівні
});

for (const element of makers) {
  const strHtML = `
          <div class="model-card">
            <a href="pages/model-detail.html">
              <img 
                  src="${element["logo-img"]}" 
                  alt="${element["logo-img"].match(/[^/]+$/)}" 
                  class="model-logo">
            </a>
            <h3 class="model-name">${element["maker-name"]}</h3>
          </div>
          `
  modelsContainer.insertAdjacentHTML("beforeend", strHtML);
}