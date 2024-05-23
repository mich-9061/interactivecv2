import { createContext, useContext, useState, ReactNode } from 'react';

interface SlugContextType {
    slug: string | null;
    setSlug: (slug: string | null) => void;
}

const SlugContext = createContext<SlugContextType | undefined>(undefined);

export const SlugProvider = ({ children }: { children: ReactNode }) => {
    const [slug, setSlug] = useState<string | null>(null);

    return (
        <SlugContext.Provider value={{ slug, setSlug }}>
            {children}
        </SlugContext.Provider>
    );
};

export const useSlug = () => {
    const context = useContext(SlugContext);
    if (context === undefined) {
        throw new Error('useSlug must be used within a SlugProvider');
    }
    return context;
};
