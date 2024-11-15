import React, {useEffect} from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='


const SingleCocktail = () => {

    const { id } = useParams();
    const [cocktail, setCocktail] = useState(null);
    const [loading, setLoading] = useState(true)


    const fetchCocktailData = async () => {
        setLoading(true)
        const response = await fetch(`${url}${id}`)
        const data = await response.json();
        console.log(data)
        const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
        } = data.drinks[0]
        const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]
        const newCocktail = {
            name, 
            image, 
            info, 
            category, 
            glass, 
            instructions,
            ingredients, 
        }
        setCocktail(newCocktail)
        setLoading(false)
    }

    useEffect(() => {
        fetchCocktailData()
    }, [])

    


    if (loading) {
        return <Loading />
    }

    const {name, image, info, category, glass, instructions, ingredients} = cocktail

    return ( 
        <>
        <section className="section cocktail-section">
            <h2 className="section-title">name</h2>
            <div className="drink">
                <img src={image} alt={name} />
                <div className="drink-info">
                <p>
              <span className='drink-data'>name :</span> {name}
            </p>
            <p>
              <span className='drink-data'>category :</span> {category}
            </p>
            <p>
              <span className='drink-data'>info :</span> {info}
            </p>
            <p>
              <span className='drink-data'>glass :</span> {glass}
            </p>
            <p>
              <span className='drink-data'>instructons :</span> {instructions}
            </p>
            <p>
              <span className='drink-data'>ingredients :</span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}> {item}</span> : null
              })}
            </p>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default SingleCocktail;