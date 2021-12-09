import {useState} from 'react';
import './NewsFilter.css';
const NewsFilter = ({onFilterSubmit}) => {

    const[filterText,setFilter] = useState();

    const handleFilterSubmit = (event) =>{
        event.preventDefault();

        if (!filterText ==="") {
            
            return;
        }
        onFilterSubmit({filterText: filterText});

    }

    const handleFilterChange = (event) => {
        setFilter (event.target.value);
    }

    return(
        <>
             <form id = 'filter' onSubmit = {handleFilterSubmit}>
                <input type = "text" placeholder = "Enter words to filter by" onChange = {handleFilterChange}></input>
                <input type = "submit" value = "Filter"/>
            </form>
        </>
    );

}


export default NewsFilter;