import React from 'react';
import { useEffect, useState, useContext, createContext } from 'react';

const AppContext = createContext();
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='



const AppProvider = ({children}) => {

  const [loading, setLoading] = useState(true);
  const [cocktails, setCocktails] = useState([]);
  const [searchTerm, setSearchTerm] = useState('a')

  const fetchData = async () => {
    setLoading(true)
    console.log(searchTerm)
    const data = await fetch(`${url}${searchTerm}`)
    const cocktails = await data.json()
    const {drinks} = cocktails
    const newDrinks = drinks.map((drink) => {
      const {
        idDrink,
        strDrink,
        strDrinkThumb,
        strAlcoholic,
        strGlass,
      } = drink;

      return {
        id: idDrink,
        name: strDrink,
        image: strDrinkThumb,
        info: strAlcoholic,
        glass: strGlass
      }
    })
    setCocktails(newDrinks)
    console.log(drinks)
    setLoading(false)
  
  }

  useEffect(() => {
    fetchData()
}, [searchTerm])

  return ( 
    <AppContext.Provider
      value={{loading, cocktails, setSearchTerm}}
    >
      {children}
    </AppContext.Provider>
   );
}


export const useGlobalContext = () => {
  return useContext(AppContext)
}
 
export {AppContext, AppProvider}