import toast from "react-hot-toast"

// get all coffee from local storage
const getAllFav = () => {
  const all = localStorage.getItem('fav')

  if (all) {
    const favorites = JSON.parse(all)
    console.log(favorites)
    return favorites
  }
  else {
    console.log([])
    return []
  }
}


//add a coffee to local storage
const addFav = coffee => {
  //get all pre. data
  const fav = getAllFav()
  const isExist = fav.find(item => item.id == coffee.id)
  if(isExist) return toast.error('Already exist!')


  fav.push(coffee)
  localStorage.setItem('fav', JSON.stringify(fav))
  toast.success('Successfully added!')
}
//remove a coffee from local storage



export { addFav, getAllFav }