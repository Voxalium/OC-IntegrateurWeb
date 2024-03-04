export const Card = ({ title, skill, category }) => {
    console.log(category);
    return (
        <div className="card">
            <h3>{title}</h3>

            {skillIterator(skill, category)}
        </div>
    );
};

const skillIterator = (skill) => {
    return (
        <>
            <div className="container">
                {skill.map((s, idx) => (
                    <ul key={`${idx}-ul`}>
                        <li key={`${idx}-li`}>
                            <img src={s.logo} alt={`${s.name} logo `} />
                            {s.name}
                        </li>
                    </ul>
                ))}
            </div>
        </>
    );
};
