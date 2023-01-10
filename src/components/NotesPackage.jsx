import Note from './Note';
import EmptyNotesMessage from './EmptyNotesMessage';
import Greet from './Greet';
import { TiTrash, TiEdit, HiLightBulb } from 'react-icons/all';

const NotesPackage = ({
  eventRemoveBtn,
  eventDetailsBtn,
  searchedNotes,
  notesData,
}) => {
  const guest = (searchedNotes, notesData) =>
    searchedNotes.length !== 0
      ? searchedNotes.map((value, index) => (
          <Note
            id={value.id}
            key={index}
            note={value.title}
            noteContent={value.content}
            noteDate={value.updatedAt}
            eventDetailsBtn={eventDetailsBtn}
            eventRemoveBtn={eventRemoveBtn}
            firstIcon={<TiEdit />}
            secondIcon={<TiTrash />}
          />
        ))
      : notesData.map((value, index) => (
          <Note
            id={value.id}
            key={index}
            note={value.title}
            noteContent={value.content}
            noteDate={value.updatedAt}
            eventDetailsBtn={eventDetailsBtn}
            eventRemoveBtn={eventRemoveBtn}
            firstIcon={<TiEdit />}
            secondIcon={<TiTrash />}
          />
        ));

  const renderNotes = guest(searchedNotes, notesData);

  return (
    <section className='mainContainer'>
      <Greet />

      {renderNotes.length === 0 || null ? (
        <EmptyNotesMessage
          label={'Your saved notes will appear here.'}
          message={`Add some notes!`}
          icon={<HiLightBulb />}
        />
      ) : (
        renderNotes
      )}
    </section>
  );
};

export default NotesPackage;
