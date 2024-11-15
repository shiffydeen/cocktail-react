import React, {useRef} from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {

    const searchValue = useRef('')
    const {setSearchTerm} = useGlobalContext()

    const searchCocktail = () => {
        setSearchTerm(searchValue.current.value)
    }

    return ( 
        <>
        <section className="section search">
            <form action="" className="search-form">
                <div className="form-control">
                    <label htmlFor="name">search your favourite cocktail</label>
                    <input 
                        type="text" 
                        name='name'
                        id='name'
                        onChange={searchCocktail}
                        ref={searchValue}
                        />
                </div>
            </form>
        </section>
        </>
     );
}
 
export default SearchForm;