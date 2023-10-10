import React, { useEffect, useState } from "react"
import useDebounce from "../CustomHooks/useDebounce"
import { PhotoCard } from "../component/PhotoCard"
import "../styles/HomePage.css"

export const HomePage = () => {
    const [photoData, setPhotoData] = useState([])
    const [query, setQuery] = useState("Chandu")
    const debounceUpdateSearch = useDebounce((e) => setQuery(e.target.value))

    const getData = async() => {
        try {
            const resp = await fetch(`https://api.github.com/search/users?q=${query||"Chandu"}`)
            const data = await resp.json()
            setPhotoData(data.items)
        } catch (error) {
            console.log("Error while fetching the data", error.message);
        }
    }

    const updateQuery = useDebounce()
    

    useEffect (() => {
        getData()
    }, [query])

    return (
        <div>

            <div>
                <input 
                   type="text"
                   onChange={debounceUpdateSearch}
                   id="userInput"
                   placeholder="Enter Photo Id" 
                />
             </div>
                <div id="imageContainer">
                    {
                        photoData?.map((e) => {
                            return <PhotoCard id={e.login} url={e.avtar_url}/>
                        })
                    }
                </div>
        </div>
    )
}