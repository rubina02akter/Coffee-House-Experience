import Heading from "../components/Heading"
import {useState,useEffect} from 'react'
import { getAllFav } from "../utility/script";
import Card from "../components/Card";


const Dashboard = () => {
 const [coffees, setCoffees] = useState([])
 useEffect(()=>{
  const fav = getAllFav()
  setCoffees(fav)
 },[])


  return (
    <>
     <Heading title='Welcome to Dashboard' subtitle='Manage coffees that you have previously added as favorite. You can view or remove them from here.' />

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </div>

    </>
  );
};

export default Dashboard;