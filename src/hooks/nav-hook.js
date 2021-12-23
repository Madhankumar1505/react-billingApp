import { useState } from "react"

export const useNavHook = () => {
    const [page, setPage] = useState("welCome");
    function goToPage(newPage) {
        setPage(newPage);
    }
    let navInfo = {
        page, goToPage
    }
    return navInfo;
}