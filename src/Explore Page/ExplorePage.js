import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

export const ExplorePage = () => {

    const [topFive, setTopFive] = useState([])
    const navigate = useNavigate()


    useEffect(
        () => {
           fetch(`http://localhost:8088/TopFives?_expand=user`)
           .then(response => response.json())
           .then((exploreArray) => {
                setTopFive(exploreArray)
           })
        },
        [] 
    )


    return <>

    <article className="topFive">
    {
                    topFive.map(
                        (TopFives) => (
                            <section className="topFiveCard" key={`TopFives--${TopFives.id}`}>
                                <div>
                                <h3>{TopFives.user?.username}'s Top Five Movies</h3>
                                <header> 
                                    <li>{TopFives.titleOne}</li>
                                    <li>{TopFives.titleTwo}</li>
                                    <li>{TopFives.titleThree}</li>
                                    <li>{TopFives.titleFour}</li>
                                    <li>{TopFives.titleFive}</li>
                                    </header>
                                </div>
                            </section>
                        )
                    )
                }
        <footer>
            <button
                    className="createFive_Button" onClick={() => navigate("/TopFiveForm")}> Create Top Five Movie List
            </button>
        </footer>
    </article>
    </>

}