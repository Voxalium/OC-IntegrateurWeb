import githubLogo from "/logos/github.webp";
import mailLogo from "/logos/mail.webp";
import linkedinLogo from "/logos/linkedin.webp";
export const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="links">
                <a href="https://github.com/Voxalium" target="_blank" rel="noreferrer">
                    <img src={githubLogo} alt="Logo Github" />
                </a>
                <a href="mailto:terence.truyens@sfr.fr">
                    <img src={mailLogo} alt="Logo email" />
                </a>
                <a
                    href="https://linkedin.com/in/terence-truyens-6283092b9"
                    target="_blank"
rel="noreferrer"
                >
                    <img src={linkedinLogo} alt="Logo linkedin" />
                </a>
            </div>
            <p>Terence Truyens 2024 </p>
        </footer>
    );
};
