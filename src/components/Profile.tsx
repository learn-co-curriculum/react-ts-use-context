import Interests from "./Interests";
import { User } from "../data";

interface Props {
  user: User;
  theme: string;
}

function Profile({ user, theme }: Props) {
  if (!user) return <h2>Please Login To View Profile</h2>;
  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <Interests interests={user.interests} theme={theme} />
    </div>
  );
}

export default Profile;
