import Collapse from "../Collapse/Collapse.jsx";

function Accordion() {
    let fiabilite = [
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    ];
    let respect = [
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    ];
    let service = [
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    ];
    let securite = [
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    ];
    return (
        <div className="accordion">
            <Collapse title="Fiabilité" items={fiabilite} />
            <Collapse title="Respect" items={respect} />
            <Collapse title="Service" items={service} />
            <Collapse title="Sécurité" items={securite} />
        </div>
    );
}

export default Accordion;
