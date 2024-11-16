import React, { useState, useEffect } from 'react';
import Loading from './Loading'
import Cocktail from './Cocktail';
import { useGlobalContext } from '../context';



const CocktailList = () => {

    const {loading, cocktails} = useGlobalContext()

    if (loading) {
        return <Loading />
    }

    if (cocktails.length < 1) {
        return (
            <h2 className='section-title'>
                no cocktails matched your search criteria
            </h2>
        )
    }

    return ( 
        <>
            <section className="section">
                <h2 className="section-title">
                    <div className="cocktails-center">
                        {cocktails.map((drink) => {
                            return <Cocktail key={drink.id} {...drink}/>
                        })}
                    </div>
                </h2>
            </section>
        </>
     );
}
 
export default CocktailList;