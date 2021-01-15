import { useEffect } from "react";
import keyCodes from "../constants/keyCodes";

const useEnterKeyPress = (targetElement, handler) => {
    const localHandler = (event) => {
        if (event.keyCode === keyCodes.ENTER_KEY_CODE) {
            handler(event);
        }
    };

    useEffect(() => {
        targetElement.current.addEventListener("keypress", localHandler);

        return () =>
            targetElement.current.removeEventListener("keypress", localHandler);
    }, []);
};

export default useEnterKeyPress;
