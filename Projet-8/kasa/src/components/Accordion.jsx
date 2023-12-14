import Dropdown from "./Dropdown";

function Accordion() {
    let fiabilite = ["Lorem", "ipsum", "dolor", "sit"];
    let respect = ["Lorem", "ipsum", "dolor", "sit"];
    let service = ["Lorem", "ipsum", "dolor", "sit"];
    let securite = ["Lorem", "ipsum", "dolor", "sit"];
    return (
        <div className="accordion">
            <Dropdown title="Fiabilité" items={fiabilite} />
            <Dropdown title="Respect" items={respect} />
            <Dropdown title="Service" items={service} />
            <Dropdown title="Sécurité" items={securite} />
        </div>
    );
}

export default Accordion;
