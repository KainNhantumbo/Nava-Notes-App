import { HiX } from 'react-icons/hi';
import Button from './Button';
import { NotificationContainer } from '../styles/notification';

const Notification = ({ status, btnDescription, btnEvent, textContent, icon }) => {
  return (
    <>
      {
        status === true ? (
          <NotificationContainer>
            <section>
              {icon}
              <span> {textContent} </span>
              <Button
                event={btnEvent}
                description={btnDescription}
                icon={<HiX />}
              />
            </section>
          </NotificationContainer>
        ) : (
          null
        )
      }
    </>
  )
}

export default Notification;