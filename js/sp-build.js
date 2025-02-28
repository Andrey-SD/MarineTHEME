const price = [
  {
    id: "123",
    partName: "Мастило",
    minPrice: "",
    comment1: "",
    optimalPrice: "2769",
    comment2:{
      text:"Liqui Moli Optimal 5W-40",
      link:{
        href:"http://google.com",
        text:"постачальник"
      }
    } ,
    servicePrice: "400",
    comment3: "",
    mileage: "10"
  },
  {
    id: "123",
    name: "Масляный фильтр (вставка) ",
    minPrice: "143",
    comment1: "SHAFER",
    optimalPrice: "205",
    comment2: "BOSCH",
    servicePrice: "",
    comment3: "",
    mileage: ""
  },
  {
    id: "123",
    name: "Мастило",
    minPrice: "",
    comment1: "",
    optimalPrice: "2769",
    comment2: "Liqui Moli Optimal 5W-40",
    servicePrice: "400",
    comment3: "",
    mileage: "10"
  },
  {
    id: "123",
    name: "Масляный фильтр (вставка) ",
    minPrice: "143",
    comment1: "SHAFER",
    optimalPrice: "205",
    comment1: "BOSCH",
    servicePrice: "",
    comment3: "",
    mileage: ""
  }
]

window.addEventListener("load", (event) => {
  const data = price;
  console.log(data);
  const table = document.querySelector(".serv-price-table>tbody");
  let count = 0;
  for (const row of data) {
    count++;
    const strHtml = `
    <tr>
      <td>${count}</td>
      <td>${row.partName}</td>
      <td>${row.minPrice}</td>
      <td>${row.comment1}</td>
      <td>${row.optimalPrice}</td>
      <td>
        <p> ${row.comment2.text}</p>
        <a href="${row.comment2.link.href}" target="_blank">${row.comment2.link.text}</a>
      </td>
      <td>${row.servicePrice}</td>
      <td>${row.comment3}</td>
      <td>${row.mileage}</td>
    </tr>
   `;
   table.insertAdjacentHTML("beforeend", strHtml);
  }
});
