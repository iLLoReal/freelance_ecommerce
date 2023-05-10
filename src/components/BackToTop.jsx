
import React from "react";
import { redirectScroll } from "../scripts/redirect";

export const BackToTop = () => {
    return (
        <div onClick={() => redirectScroll('#top')}>
            React Element Back to top
        </div>
    )
}

