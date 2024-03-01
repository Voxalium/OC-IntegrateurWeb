import githubLogo from "../../assets/github.webp";
export const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="links">
                <a href="https://github.com/Voxalium" target="_blank">
                    <img src={githubLogo} alt="Logo Github" />
                </a>
            </div>
            <p>Terence Truyens 2024 </p>
        </footer>
    );
};
