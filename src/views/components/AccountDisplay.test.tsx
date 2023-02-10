import React, { ReactElement } from "react";

import { cleanup, fireEvent, renderWithProviders, screen, waitFor } from "../../test-utils";

import { AccountDisplay } from "./AccounDisplay";

afterEach(cleanup);

interface ITestModule {
    ui: ReactElement;
}

function TestModule({ ui }: ITestModule) {
    //console.log("TestModule");
    test("fetches & receives a user after clicking the fetch user button", async () => {
        renderWithProviders(ui);

        expect(screen.getByText("Fetch Post")).toBeInTheDocument();

        fireEvent.click(screen.getByRole("button", { name: "Fetch Post" }));
        expect(screen.queryByText(/loading/i)).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.queryByLabelText("post-box")).toBeInTheDocument();
        });

        expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });
}

TestModule({ ui: <AccountDisplay /> });
