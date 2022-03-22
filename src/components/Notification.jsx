import { HiX } from 'react-icons/hi';
import Button from './Button';
import { NotificationContainer } from '../styles/notification.module';
import PropTypes from 'prop-types';

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

Notification.propTypes = {
  textContent: PropTypes.string.isRequired,
  btnDescription: PropTypes.string.isRequired
}

export default Notification;