import { useState } from "react"
import "./Dropdown.css"

function Dropdown({ dropdownList }) {
    let [searchValue, setSearchValue ] = useState("")
    let [filteredSearchList, searchfilterList] = useState([])

    let handleSearch = (e) => {
        console.log(e.target.value)
        setSearchValue(e.target.value)
        searchfilterList(dropdownList.filter(item => item.cities.startsWith(e.target.value)))
    }
    return (
        <div className="dropdown">
            <input value={searchValue} onChange={(e) => handleSearch(e)} className="dropdown-header"/>
            {
            true ?
                <div className="dropdown-list">
                    {
                        
                        searchValue === ""
                        ?
                        dropdownList.map((item, id) => <p key={item.id}>{item.cities}</p>)
                        :
                        filteredSearchList.map((item, id) => <p key={item.id}>{item.cities}</p>)
                    }
                </div>:

                ""


            }
        </div>

    )
}

export default Dropdown