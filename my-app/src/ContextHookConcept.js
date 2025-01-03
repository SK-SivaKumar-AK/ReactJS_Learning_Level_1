import { createContext } from "react";

const DataContext = createContext();

export const DataProvider = ( {children} ) => {
    const functionValues1 = 'SivaKumar';
    const functionValues2 = 'Developer';
    return (
        <DataContext.Provider value={ {
            functionValues1,
            functionValues2
        } }>
            {children}
        </DataContext.Provider>
    )
}


export default DataContext;