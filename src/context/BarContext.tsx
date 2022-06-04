import { createContext, useEffect, useState } from 'react';

export const BarContext = createContext({
    bar: {
        test: '',
        cocktails: [],
    },
    setBar: () => {},
});

export const Bar = ({ children }) => {
    const [bar, setBar] = useState({});

    useEffect(() => {
        fetch('/data/cocktails.json')
            .then(res => res.json())
            .then(data => {
                setBar({ ...bar, ...{ cocktails: data } });
            })
            .catch(err => console.log(err));
    }, []);

    return <BarContext.Provider value={{ bar, setBar }}>{children}</BarContext.Provider>;
};
