import { Nav } from "../Nav/Nav";
import { Logo } from "../Logo/Logo";
export const Header = () => {
    return (
        <div className="header">
            <Logo />
            <Nav />
        </div>
    );
};
