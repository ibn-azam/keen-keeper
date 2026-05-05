import { createContext, useContext, useState } from "react";

const ContactContext = createContext();

export function ContactProvider({ children }) {
    const [timeline, setTimeline] = useState([]);

    const logContact = ({ contactName, contactPicture, type }) => {
        const entry = {
            id: Date.now(),
            contactName,
            contactPicture,
            type,           // "Call" | "Text" | "Video"
            date: new Date().toISOString(),
        };
        setTimeline(prev => [entry, ...prev]);
    };

    return (
        <ContactContext.Provider value={{ timeline, logContact }}>
            {children}
        </ContactContext.Provider>
    );
}

export const useContact = () => useContext(ContactContext);