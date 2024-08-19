import { useState, useEffect } from 'react';

const useTimer = () => {
    const [date, setDate] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return date;
};

export default useTimer;