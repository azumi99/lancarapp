import { createContext, useContext } from 'react';

type TabBarContextType = {
    showTabBar: () => void;
    hideTabBar: () => void;
};

export const TabBarContext = createContext<TabBarContextType>({
    showTabBar: () => { },
    hideTabBar: () => { },
});

export const useTabBar = () => useContext(TabBarContext);
