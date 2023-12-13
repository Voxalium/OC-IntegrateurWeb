import Dropdown from "./Dropdown";

function Accordion() {
    let equipement = [
        "Climatisation",
        "Wifi",
        "Cuisine",
        "Espace de travail",
        "Fer à repasser",
        "Sèche-cheveux",
        "Cintre",
    ];

    let respect = [1, 2, 3, 4];
    let service = ["Lorem", "ipsum", "dolor", "sit"];
    let securite = ["Lorem", "ipsum", "dolor", "sit", "amet"];
    return (
        <div className="accordion">
            <Dropdown title="Équipements" items={equipement} />
            <Dropdown title="Respect" items={respect} />
            <Dropdown title="Service" items={service} />
            <Dropdown title="Sécurité" items={securite} />
        </div>
    );
}

export default Accordion;
