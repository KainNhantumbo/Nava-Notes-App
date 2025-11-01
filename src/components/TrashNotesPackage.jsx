import { BiHistory } from 'react-icons/bi';
import { HiSparkles } from 'react-icons/hi';
import { TiTrash } from 'react-icons/ti';
import EmptyNotesMessage from './EmptyNotesMessage';
import Note from './Note';

const TrashNotesPackage = ({ eventDelete, eventRestore, trashNotes }) => (
  <section className='mainContainer'>
    {trashNotes.length == 0 || null ? (
      <EmptyNotesMessage
        label={'Brilliant!'}
        message={`Looks like the trash is empty`}
        icon={<HiSparkles />}
      />
    ) : (
      trashNotes.map((value, index) => (
        <Note
          id={value.id}
          key={index}
          note={value.title}
          noteContent={value.content}
          noteDate={value.updatedAt}
          eventDetailsBtn={eventRestore}
          eventRemoveBtn={eventDelete}
          firstIcon={<BiHistory />}
          secondIcon={<TiTrash />}
        />
      ))
    )}
  </section>
);

export default TrashNotesPackage;
