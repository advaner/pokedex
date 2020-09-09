import React, { FormEvent, useState } from "react"
import axios from "axios"

import "./style.css"

interface Pokemon {
    id: number,
    name: string,
    sprites: {
        front_default: string
    }

}

const Home = () => {

    const [searchPokemon, setSearchPokemon] = useState("")

    const [ pokemons, setPokemons ] = useState<Pokemon[]>([])

    async function handleSubmit (event: FormEvent<HTMLFormElement>): Promise<void>{
        
        event.preventDefault()

        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchPokemon.toLowerCase()}`)

        const pokemon = response.data

        setPokemons([...pokemons, pokemon])

        setSearchPokemon(" ")

        } 

    return(
        <React.Fragment>
            <div id="body_box">
                <div id="pokedex_box">
                    <div id="pokedex_view_box">
                        <div id="pokedex_laser_box">
                            <div id="pokedex_laser">
                                <div id="laser">
                                </div>
                            </div>
                            <div id="led_box">
                                <div id="blue_led">
                                    
                                </div>
                                <div id="yellow_led">
                                    
                                </div>
                                <div id="green_led">
                                    
                                </div>
                            </div>
                        </div>
                        <div id="pokedex_screen_fullbox">
                            <div id="pokedex_screen_shadow">
                                <div id="pokedex_screen_box">
                                    <div id="pokedex_screen">
                                        <div>
                                            {pokemons.map((pokemon) => (
                                                <div id="pokemon_screen">
                                                    <img key={searchPokemon} src={pokemon.sprites.front_default} alt={pokemon.sprites.front_default}/>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div id="pokemon_name_box">
                                    <div id="pokemon_name">
                                        {pokemons.map((pokemon) => (
                                                <div id="name_box">
                                                    <h3 key={searchPokemon}>{pokemon.name.toUpperCase()}</h3>
                                                </div>
                                            ))}
                                    </div>
                                    <div id="arrows_fullbox">
                                        <div id="arrows_left">
                                            <div id="arrow_left">

                                            </div>
                                        </div>
                                        <div id="arrows_up_bottom">
                                            <div id="arrow_up">

                                            </div>
                                            <div id="arrow_middle">

                                            </div>
                                            <div id="arrow_bottom">

                                            </div>
                                        </div>
                                        <div id="arrows_right">
                                            <div id="arrow_right">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="pokedex_search_box">
                        <div id="pokedex_search_shadow">
                            <form onSubmit={handleSubmit}>
                                <div id="search_box">
                                    <input type="search" placeholder="Pokemon" value={searchPokemon} onChange={(event) => setSearchPokemon(event.target.value)} required/>
                                </div>
                                <div id="fake_buttons">
                                    <div className="buttons">
                                    </div>
                                    <div className="buttons">
                                    </div>
                                    <div className="buttons">
                                    </div>
                                    <div className="buttons">
                                    </div>
                                    <div className="buttons">
                                    </div>
                                    <div className="buttons">
                                    </div>
                                    <div className="buttons">
                                    </div>
                                    <div className="buttons">
                                    </div>
                                    <div className="buttons">
                                    </div>
                                    <div className="buttons">
                                    </div>
                                </div>
                                <div id="button_box">
                                    <button type="submit" ></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home