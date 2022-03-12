import Header from '../components/Header';
import Button from '../components/Button';
import TrashNotesPackage from '../components/TrashNotesPackage'

export default function Trash () {

  const emptyTrashHandler = (e) => {
    console.log(e)
  }
  
  return (
    <>
      <Header title={'Trash'}
        child={<Button className='res'
          description='Permanently Delete All Notes'
          event={emptyTrashHandler}  
        />}
      />
      <TrashNotesPackage />
    </>
  );
}