import { useState } from "react"

export const useValidate = () => {
    const [validate, setValidate] = useState(() => true);
    return [validate, setValidate];
}