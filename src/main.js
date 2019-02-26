//const data = window.POKEMON.pokemon; //trae la data//
let dataJson= [];
const initialPage = document.getElementById('initial-page'); //pagina de inicio//
const pokemonPage = document.getElementById('pokemon-page'); //página de pokemones//
const initialPokeballButton = document.getElementById('pokeball-button');
const printList = document.getElementById('print-list');
const buttonFilterByType = document.getElementsByClassName('button-filter-by-type');
const weight = document.getElementById('weight');
const counterCollection = document.getElementById('counter-collection');
const printType = document.getElementById('print-type');
const alphabeticOrderButton = document.getElementsByClassName('type-button'); //id está en español porque se muestra como parte de la información de la página
const menuToggle = document.getElementById('menu-toggle');
const aside = document.getElementById('aside');

initialPokeballButton.addEventListener('click', () => { // ocultar página de inicio//
  initialPage.classList.add('hideElement');
  pokemonPage.classList.remove('hideElement');
});


fetch('./data/pokemon/pokemon.json')
.then(response => response.json())
.then(pokemonJson => {
  const arrData=pokemonJson.pokemon;
  const dataPokemon=window.pokesaurius.getDataPokemon(arrData);
  dataJson=dataPokemon;
  print(dataJson)
  return dataJson
})
.then(newData => filterByPokemon(newData))
.then(resultado => sortByPokemonName(resultado))
 //.catch(err => console.error(err))



  const print = (dataJson) => { //imprime la data//
    let totalWeight = 0; //Contador que  guarda el peso de los pokemon
    dataJson.forEach(element => {
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
    const averageWeight = totalWeight / dataJson.length; //saca promedio del peso//
    weight.innerHTML = averageWeight.toFixed(2); //To Fixed 2 te da solo 2 decimales del resultado  final de la división
    counterCollection.innerHTML = dataJson.length;
  };
  

  const menuUndo = document.getElementById('menu-undo');  
  menuUndo.addEventListener('click', () => {
   printList.innerHTML ='';
   print(dataJson)
    
    });
  
    
    const  filterByPokemon = (dataJson) => {
      let pokemonFiltrados = []
  for (let i = 0; i < buttonFilterByType.length; i++) {
    buttonFilterByType[i].addEventListener('click', () => {
      aside.classList.add('hideElement'); //oculta el aside en versión ipad y mobile//
      let pokemonElegido = buttonFilterByType[i].id //esta let guarda la elección del usuario por medio del click y nos trae la posición y el id del boton.
      printList.innerHTML = ''; //limpia la página antes de renderizar los pokémon filtrados
      const pokemonFiltrados  = window.pokesaurius.typeFilter(dataJson, pokemonElegido); //es la invocación de la función que filtra
      printType.innerHTML = pokemonElegido; //imprime el id en la seccion de sabias que?
      print(pokemonFiltrados)
      sortByPokemonName(pokemonFiltrados)
    });
  }
  return pokemonFiltrados
}
//función que ordena A-Z y la renderiza
 const sortByPokemonName= (data) => { 
   for (let i = 0; i < alphabeticOrderButton.length; i++) 
    alphabeticOrderButton[i].addEventListener('click', () => { 
      let sortBy= alphabeticOrderButton[i].id;
      printList.innerHTML ='';
    const resultSortByName = window.pokesaurius.sortByName(data,sortBy);
    print(resultSortByName);
  });
}

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
  //localStorage.setItem('data,JSON.stringify(arrData))mandar el dato
  //localStorage.getItem('data')

  //variables, funciones declaradas, funciones invocadas, eventos add eventlistener 
  