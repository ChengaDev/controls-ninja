import { useEffect } from "react";
import keyCodes from "../constants/keyCodes";

const useEnterKeyDownEvent = (targetElement, handler) => {
    const localHandler = (event) => {
        if (event.keyCode === keyCodes.ENTER) {
            handler(event);
        }
    };

    useEffect(() => {
        const instance = targetElement.current;
        instance.addEventListener("keydown", localHandler);

        return () => instance.removeEventListener("keydown", localHandler);
    }, []);
};

export default useEnterKeyDownEvent;
