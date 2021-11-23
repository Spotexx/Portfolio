import { createContext , useState} from 'react'

export interface contextInterface {
    pageId: number;
    setPageId: (state:number) => void;
}

export const UserContext = createContext<contextInterface>({
    pageId: 0,
    setPageId: (state:number) => 0,
})
//@ts-ignore
export const UserContainer = ({children}) => {

    const [pageId, setPageId] = useState(0);

    return <UserContext.Provider value = {{
        pageId, setPageId,
    }}>
        {children}
    </UserContext.Provider>
}