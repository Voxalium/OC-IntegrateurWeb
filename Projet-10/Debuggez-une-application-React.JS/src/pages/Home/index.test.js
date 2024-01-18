import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
    it("a list of fields card is displayed", async () => {
        render(<Home />);
        await screen.findByText("Email");
        await screen.findByText("Nom");
        await screen.findByText("Prénom");
        await screen.findByText("Personel / Entreprise");
    });

    describe("and a click is triggered on the submit button", () => {
        it("the success message is displayed", async () => {
            render(<Home />);
            fireEvent(
                await screen.findByText("Envoyer"),
                new MouseEvent("click", {
                    cancelable: true,
                    bubbles: true,
                })
            );
            await screen.findByText("En cours");
            await screen.findByText("Message envoyé !");
        });
    });
});

describe("When a page is created", () => {
    it("a list of events is displayed", () => {
        render(<Home />);
        const events = screen.getByTestId("events-test-id");
        expect(events).toBeInTheDocument();
    });
    it("a list a people is displayed", () => {
        render(<Home />);
        const peoples = screen.getByTestId("peoples-container-test-id");
        expect(peoples).toBeInTheDocument();
        expect(screen.getByText("Samira")).toBeInTheDocument();
    });
    it("a footer is displayed", () => {
        render(<Home />);
        const footer = screen.getByTestId("footer-test-id");
        expect(footer).toBeInTheDocument();
        expect(screen.getByText("contact@724events.com")).toBeInTheDocument();
    });
    it("an event card, with the last event, is displayed", () => {});
});
