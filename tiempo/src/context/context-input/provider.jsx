import { useState } from "react";
import { InputContext } from ".";

export function InputProvider({value, children}){

    const [text, setText] = useState(value);
    return (
        <InputContext.Provider value = {[text, setText]}>
            {children}
        </InputContext.Provider>
    )

}