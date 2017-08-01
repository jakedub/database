//
// const template = `<section>
//   <div class="object">
//     <img src="${customers.results[0].picture.large}">
//     <h1>${customers.results[0].name.title} ${customers.results[0].name.first} ${customers.results[0].name.last}</h1>
//   </div>
//   <div class="content">
//     ${customers.results[0].email}
//     <br />
//     ${customers.results[0].location.street}
//     <br />
//     ${customers.results[0].location.city} ${customers.results[0].location.state} ${customers.results[0].location.postcode}
//     <br />
//     ${customers.results[0].phone}
//     <br />
//     ${customers.results[0].cell}
//   </div>
//   </section>`;
//
// document.querySelector(".directory").innerHTML = template;
// console.log(template);
function populate(id){
const template2 = `<section>
  <div class="object">
    <img src="${customers.results[id].picture.large}">
    <h1>${customers.results[id].name.title} ${customers.results[id].name.first} ${customers.results[id].name.last}</h1>
  </div>
  <div class="content">
    ${customers.results[id].email}
    <br />
    ${customers.results[id].location.street}
    <br />
    ${customers.results[id].location.city} ${customers.results[id].location.state} ${customers.results[id].location.postcode}
    <br />
    ${customers.results[id].phone}
    <br />
    ${customers.results[id].cell}
  </div>
  </section>`;
  document.querySelector(".directory").innerHTML = template2;
  document.write(template2);
  console.log(template2);
}
let i=0;
while(i<customers.results.length){
  // let name = document.querySelector(".object");
    populate(i);
    i++;
  }
