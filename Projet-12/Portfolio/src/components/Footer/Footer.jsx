import githubLogo from "/logos/github.webp";
import mailLogo from "/logos/mail.webp";
export const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="links">
                <a href="https://github.com/Voxalium" target="_blank">
                    <img src={githubLogo} alt="Logo Github" />
                </a>
                <a href="mailto:terence.truyens@sfr.fr">
                    <img src={mailLogo} alt="" />
                </a>
            </div>
            <p>Terence Truyens 2024 </p>
        </footer>
    );
};
