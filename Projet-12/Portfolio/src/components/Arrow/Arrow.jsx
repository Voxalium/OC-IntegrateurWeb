import arrowUp from "/ui/arrow_up.webp";
import arrowDown from "/ui/arrow_down.webp";
import arrowHome from "/ui/arrow_home.webp";
export const Arrow = ({ link, direction }) => {
  let img = "";
  direction == "down" ? (img = arrowDown) : (img = arrowUp);
  switch (direction) {
    case "down":
      img = arrowDown;
      break;
    case "up":
      img = arrowUp;
      break;
    case "home":
      img = arrowHome;
  }

  return (
    <a href={link} className={`arrow ${direction}`}>
      <img src={img} alt="navigation arrow" />
    </a>
  );
};
