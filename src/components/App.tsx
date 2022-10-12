import { useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { User } from "../data";

function App() {
  const [theme, setTheme] = useState("dark");
  const [user, setUser] = useState<User | null>(null);
  return (
    <main className={theme}>
      <Header theme={theme} setTheme={setTheme} user={user} setUser={setUser} />
      <Profile theme={theme} user={user} />
    </main>
  );
}

export default App;
