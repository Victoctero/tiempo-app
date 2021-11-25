import { useState } from "react";
import { GradosContext } from ".";

export function GradosProvider({value, children}){

    const [grados, setGrados] = useState(value);
    return (
        <GradosContext.Provider value = {[grados, setGrados]}>
            {children}
        </GradosContext.Provider>
    )

}