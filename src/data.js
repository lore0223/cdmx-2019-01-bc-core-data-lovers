window.pokesaurius = {
//función que  manipule la data y  me traiga solo una pequeña parte
 getDataPokemon:(data)=>{
   let result=[];
   data.forEach(element=>{
  result.push({  
     id : element.id,
     img: element.img, 
     num : element.num,
     name: element.name,
     type: element.type,
     candies: element.candies,
     height : element.height,
     weight: element.weight,
     nextEvolution: element.next_evolution,
  })       
  })
   return result;
    
 },
 


  //función de filtrar
  typeFilter: (data, pokemonElegido) => {
    const filterPokemonType = data.filter(element => element.type.includes(pokemonElegido));
    return filterPokemonType
  },
  //función para ordenar
  sortByName: (data,sortBy) => {
   switch(sortBy){
     case'totales-ascendente':
     return data.sort((a,b) => (a.name > b.name ) && -1);

     case 'totales-descendente':
     return data.sort((a,b) => (a.name < b.name) && -1)
   }





  }

  //   const orderPokemonName = data.sort((a, b) => {
  //     if (a.name > b.name) {
  //       return 1;
  //     } else {
  //       return -1;
  //     }
  //   })
  //   return (orderPokemonName)
  // },

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
