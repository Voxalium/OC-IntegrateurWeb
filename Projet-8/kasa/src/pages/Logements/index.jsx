import Dropdown from "../../components/Dropdown";

function Logements() {
    return (
        <div className="logements">
            <h3>Title</h3>
            <p>Ville</p>
            <p>tags</p>

            <Dropdown title="Description" items={[""]} />
            <Dropdown title="Equipements" items={[""]} />
        </div>
    );
}

export default Logements;
