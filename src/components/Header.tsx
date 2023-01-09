import ThemedButton from "./ThemedButton";
import DarkModeToggle from "./DarkModeToggle";
import defaultUser, { User } from "../data";

interface Props {
  theme: string;
  setTheme(theme: string): void;
  user: User;
  setUser(user: User | null): void;
}

function Header({ theme, setTheme, user, setUser }: Props) {
  function handleLogin() {
    if (user) {
      setUser(null);
    } else {
      setUser(defaultUser);
    }
  }

  return (
    <header>
      <h1>React Context</h1>
      <nav>
        <ThemedButton onClick={handleLogin} theme={theme}>
          {user ? "Logout" : "Login"}
        </ThemedButton>
        <DarkModeToggle theme={theme} setTheme={setTheme} />
      </nav>
    </header>
  );
}

export default Header;
