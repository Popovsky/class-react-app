import React, { useState } from "react";
import ScreenSize from "./components/ScreenSize";

function App() {
    const [isV, setIsV] = useState(true);
    return (
        <>
            <button
                onClick={() => {
                    setIsV(!isV);
                }}
            >
                switch
            </button>
            {isV && <ScreenSize />}
        </>
    );
}
export default App;
