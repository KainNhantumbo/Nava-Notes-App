import { UserUIContainer } from "../styles/useui.module";
import { HiUserCircle } from "react-icons/hi";
import PropTypes from 'prop-types';

const UserUI = ({ photo, email, username }) => {
  return (
    <UserUIContainer>
      <>
        <article>
          <div>
            <HiUserCircle />
          </div>
          <section>
            <span> Login to sync notes </span>
            <span> Guest </span>
          </section>
        </article>
      </>
      {/*
        username === null || undefined ? (
          <>
            <div>
              <HiUserCircle/>
            </div>
            <section>
              <span> Login to sync notes </span>
              <span> Guest </span>
            </section>
          </>
        ) : (
          <>
            <div>
              {photo}
            </div>
            <section>
              <span>  {username} </span>
              <span> {email} </span>
            </section>
          </>
        )
        */}
    </UserUIContainer>
  );
}

// UserUI.propTypes = {
//   username: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired
// }

export default UserUI;