import { UserUIContainer } from "../styles/useui.module";
import { HiUserCircle } from "react-icons/hi";

const UserUI = ({ photo, email, username }) => {
  return (
    <UserUIContainer>
      {
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
      }
    </UserUIContainer>
  );
}

export default UserUI;