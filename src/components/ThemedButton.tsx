import { HTMLAttributes, useContext } from "react";
import { ThemeContext } from "../context/theme";

interface Props extends HTMLAttributes<HTMLElement> {}

function ThemedButton({ ...props }: Props) {
  const { theme } = useContext(ThemeContext);

  return <button className={theme} {...props} />;
}

export default ThemedButton;
