import Button from "../Button/Button";
function Account() {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">Title</h3>
                <p className="account-amount">$Amount</p>
                <p className="account-amount-description">Desc</p>
            </div>
            <div className="account-content-wrapper cta">
                <Button
                    title="View transactions"
                    className="transaction-button"
                />
            </div>
        </section>
    );
}

export default Account;
