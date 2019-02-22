//const data = window.POKEMON.pokemon; //trae la data//
const initialPage = document.getElementById('initial-page'); //pagina de inicio//
const pokemonPage = document.getElementById('pokemon-page'); //página de pokemones//
const initialPokeballButton = document.getElementById('pokeball-button');
const printList = document.getElementById('print-list');
const buttonFilterByType = document.getElementsByClassName('button-filter-by-type');
const menuUndo = document.getElementById('menu-undo');
const weight = document.getElementById('weight');
const counterCollection = document.getElementById('counter-collection');
const printType = document.getElementById('print-type');
const alphabeticOrderButton = document.getElementById('totales'); //id está en español porque se muestra como parte de la información de la página
const menuToggle = document.getElementById('menu-toggle');
const aside = document.getElementById('aside');

initialPokeballButton.addEventListener('click', () => { // ocultar página de inicio//
  initialPage.classList.add('hideElement');
   pokemonPage.classList.remove('hideElement');
  });

menuUndo.addEventListener('click', () => {
  printList.innerHTML = '';
  print(data)
});


fetch('./data/pokemon/pokemon.json')
.then(response => response.json())
.then(pokemonJson => {
 data= pokemonJson.pokemon;
print(data)
})

  const print = (data) => { //imprime la data//
    let totalWeight = 0; //Contador que  guarda el peso de los pokemon
    data.forEach(element => {
      totalWeight += parseFloat(element.weight);
      let result = `<div id="${element.id}" class="wrapper">
          <div class="pokemon-card"> 
          <div class="pokemon-card-image">
          <img src="${element.img}">
          </div>
          <div class="box-card">
          <p>Número:${element.num}</p>
          <p>${element.name}</p>
          </div>
          </div>
          </div>`
      printList.insertAdjacentHTML("beforeend", result); //insertAdjacentHTML renderiza cada iteración y  coloca los elementos uno después del otro.
     return print;
   });
   const averageWeight = totalWeight / data.length; //saca promedio del peso//
    weight.innerHTML = averageWeight.toFixed(2); //To Fixed 2 te da solo 2 decimales del resultado  final de la división
    //counterCollection.innerHTML = data.length;
  };
    
  for (let i = 0; i < buttonFilterByType.length; i++) {
    buttonFilterByType[i].addEventListener('click', () => {
      aside.classList.add('hideElement'); //oculta el aside en versión ipad y mobile//
      let pokemonElegido = buttonFilterByType[i].id //esta let guarda la elección del usuario por medio del click y nos trae la posición y el id del boton.
      printList.innerHTML = ''; //limpia la página antes de renderizar los pokémon filtrados
      const pokemonFiltrados = window.pokesaurius.typeFilter(data, pokemonElegido); //es la invocación de la función que filtra
      print(pokemonFiltrados)
      printType.innerHTML = pokemonElegido; //imprime el id en la seccion de sabias que?
    });
  }

  alphabeticOrderButton.addEventListener('click', () => { //función que invoca ala función de ordenar A-Z y la renderiza
    printList.innerHTML = '';
    const resultSortByName = window.pokesaurius.sortByName(data);
    print(resultSortByName);
  
  });

  menuToggle.addEventListener('click', () => {
   aside.classList.remove('hideElement');
  });





// const url='./data/pokemon/pokemon.json';
// const getDataPokemon = fetch(url)
//   .then(response =>response.json())
//   .then(pokemon => pokemon.pokemon)
//   .then(data => window.localStorage.procesdata(data))
//   .then(dataP => printData(dataP))
  
//   .catch()



  //local storage puede guardar un string solo acepta strings json.stringyfy ()los convierte 