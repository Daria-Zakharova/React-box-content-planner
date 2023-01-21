import { FilterEl } from "./Filter.styled";
import {MdPersonSearch} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectFilter } from "redux/contacts-and-filtering/selectors";
import { changeFilter } from "redux/contacts-and-filtering/filter-slice";

export const Filter = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    
    return (
        <>
        {contacts.length > 0 && <FilterEl>
            <label>Search contact by name
            <MdPersonSearch size={25}/>
                <input type="text" onChange={e => dispatch(changeFilter(e.target.value))} value={filter}/>
            </label>
        </FilterEl>}
        </>
    )
}
