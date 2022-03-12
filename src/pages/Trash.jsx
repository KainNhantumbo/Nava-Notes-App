import Header from '../components/Header';
import Button from '../components/Button';
import TrashNotesPackage from '../components/TrashNotesPackage';
import { HiFire } from 'react-icons/hi';

export default function Trash () {
  const fireIcon = <HiFire/>;

  const emptyTrashHandler = (e) => {
    console.log(e)
  }
  
  return (
    <>
      <Header title={'Trash'}
        child={<Button
          description='Permanently Delete All'
          icon={fireIcon}
          event={emptyTrashHandler}  
        />}
      />
      <TrashNotesPackage />
    </>
  );
}