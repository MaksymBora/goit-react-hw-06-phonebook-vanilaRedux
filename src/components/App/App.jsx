import { useState } from "react";
import { ContactsForm } from '../ContactsForm/ContactsForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactsList/ContactsList';
import { AppWrapper, Title, SearchWrapper, StyledTitles, CloseBtn, OpenPhonebook } from './app.styled';
import { useDispatch, useSelector } from "react-redux";
import { removeContact } from "redux/contactsSlice";



export const App = () => {
  const [filter, setFilter] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const value = useSelector(state => state.contacts);
  const dispatch = useDispatch();


  const getContact = evt => {
    const searchQuerry = evt.currentTarget.value;
    setFilter(searchQuerry)
  }
  


  const showPhonebook = () => {
    setIsOpen(true)
  };

  const hidePhonebook = () => {
      setIsOpen(false)
  };


  
    return (
      <>
        {!isOpen && <OpenPhonebook onClick={showPhonebook} className="phoneBook">Open Phonebook</OpenPhonebook>}
        {isOpen &&
          <AppWrapper>
            <CloseBtn onClick={hidePhonebook}/>
            <ContactsForm />

            <SearchWrapper>
              <StyledTitles>
                <Title>Contacts</Title>
                <p>Find contacts by name</p>
              </StyledTitles>
              <Filter filter={ filter } getContact={getContact}  />
              <ContactList filteredContacts={value} removeContact={ (contactId) => dispatch(removeContact(contactId))} />
            </SearchWrapper>
        </AppWrapper>
        }
        </>
    )
}