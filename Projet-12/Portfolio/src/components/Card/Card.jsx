export const Card = ({ skill }) => {
    return (
        <div className="card">
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
        </div>
    );
};
