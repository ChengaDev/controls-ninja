import { useEffect } from "react";
import keyCodes from "../constants/keyCodes";

const useKeyDownEvent = (targetElement, keyCodes, handler) => {
    const localHandler = (event) => {
        if (keyCodes.includes(event.keyCode)) {
            handler(event);
        }
    };

    useEffect(() => {
        const instance = targetElement.current;
        instance.addEventListener("keydown", localHandler);

        return () => instance.removeEventListener("keydown", localHandler);
    }, []);
};

export default useKeyDownEvent;
