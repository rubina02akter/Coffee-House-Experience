// get all coffee from local storage
const getAllFavourites=()=>{
   const all = localStorage.getItem('favourite')
   console.log(all);
}

//add a coffee to local storage
const addFavourite = coffee => {
   //get all previous favourite data

  const favourite = []
  favourite.push(coffee)
  localStorage.setItem('favourite',JSON.stringify(favourite))

}

//remove a coffee from local storage

export {addFavourite,getAllFavourites}