import { useState } from "react"
import "./Dropdown.css"

function Dropdown({ dropdownList }) {
    let [searchValue, setSearchValue ] = useState("")
    let [filteredSearchList, searchfilterList] = useState([])
    let [openDropdownFlag, setOpenDropdownFlag] = useState(true)

    let handleSearch = (e) => {
        setOpenDropdownFlag(true) 
        console.log(e.target.value)
        setSearchValue(e.target.value)
        searchfilterList(dropdownList.filter(item => item.cities.startsWith(e.target.value)))
    }

    let itemClicked = (e) => {
        console.log("item clicked", e.target.innerHTML)
        setSearchValue(e.target.innerHTML)
        setOpenDropdownFlag(false)
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
                        openDropdownFlag && dropdownList.map((item, id) => <p key={item.id} onClick={e => itemClicked(e)}>{item.cities}</p>)
                        :
                        openDropdownFlag && filteredSearchList.map((item, id) => <p key={item.id} onClick={e => itemClicked(e)}>{item.cities}</p>)
                    }
                </div>:

                ""


            }
        </div>

    )
}

export default Dropdown