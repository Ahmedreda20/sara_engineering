import { createContext, useContext, useState } from 'react'
import { Projects} from "../../assets/data";
export const AppContext = createContext()
export const AppProvider = ({ children }) => {
  const [myData , setMyData] = useState([...Projects])
  const unique_Data = ["All" , ...new Set(Projects.map((item) => item.category))]
  const [bageid, setbageid] = useState(null)
  const [catgery_active , setcatgery_active] = useState('All')
  const FilterateItems = (catgery) => {
    setcatgery_active(catgery)
    if(catgery === "All") {
    return  setMyData([...Projects]);
    } 
    const newItems = Projects.filter((item) => item.category === catgery)
    console.log(newItems)
    return setMyData(newItems)
  }
  const [massage_Apper , setmassage_Apper] = useState(false) 
const massageHandelar = () => {
  setmassage_Apper(!massage_Apper)

}
const close_massage = () => {
  setmassage_Apper(false)
}
  return (
    <AppContext.Provider value={{ bageid, 
    setbageid,
    myData,
    close_massage,
    FilterateItems,
    catgery_active,
    unique_Data,
    massage_Apper,
    massageHandelar
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}