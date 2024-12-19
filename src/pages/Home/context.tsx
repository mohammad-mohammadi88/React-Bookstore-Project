import { createContext,useContext, useState } from "react";

const PageNumber = createContext(1);
const PageDispatch = createContext<any>(1);

export function usePageNumber(){
    const context = useContext(PageNumber)

    if(!context){
        throw new Error('we have error!!!')
    }

    return context
}

export function usePageDispatch(){
    const dispatch = useContext(PageDispatch)

    if(!dispatch){
        throw new Error('we have error!!!')
    }

    return dispatch
}
export default function pageProvider({children}:any){
    const [pageNum, setPageNum] = useState(1)
    return (
        <PageNumber.Provider value={pageNum}>
            <PageDispatch.Provider value={setPageNum}>
                {children}
            </PageDispatch.Provider>
        </PageNumber.Provider>
    )
}
