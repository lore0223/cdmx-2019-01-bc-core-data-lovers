window.pokesaurius = {
//función que  manipule la data y  me traiga solo una pequeña parte
// getDataPokemon:(data)=>{
//   data.forEach(element=>{
//   const result=`<div id="${element.id}" class="wrapper">
//                 <div class="pokemon-card"> 
//                 <div class="pokemon-card-image">
//                 <img src="${element.img}">
//                 </div>
//                 <div class="box-card">
//                 <p>Número:${element.num}</p>
//                 <p>${element.name}</p>
//                 <p>${element.next_evolution[0,1].name}</p>
//                 <p>${element.type}</p>
//                 <p>${}

//                 </div>
//                 </div>
//                 </div>`
               
//   })
// },

  //función de filtrar
  typeFilter: (data, pokemonElegido) => {
    const filterPokemonType = data.filter(element => element.type.includes(pokemonElegido));
    return filterPokemonType
  },
  //función para ordenar
  sortByName: (data) => {
    const orderPokemonName = data.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      }
    })
    return (orderPokemonName)
  },

}
































//typeSort:(data, ordenElegido) => {    
//}

// nameSort: (data) => {
//   const sortPokemonName = elementSort.sort();
//   console.log(sortPokemonName)

// }








//promedio : (peso)=>{
//for(let i=0; i< peso.length; i++){
// const sumWeight=
//}

//}
