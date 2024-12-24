import { createContext,useContext, useState } from "react";

const PageNumber = createContext<number>(1);
const PageDispatch = createContext<any>(1);
// const SearchState = createContext<string>('');
// const SearchDispatch = createContext<any>(1);

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
// export function useSearchState(){
//     const state = useContext(SearchState)

//     return state
// }
// export function useSearchDispatch(){
//     const dispatch = useContext(SearchDispatch)

//     if(!dispatch){
//         throw new Error('we have error!!!')
//     }

//     return dispatch
// }
export default function PageProvider({children}:any){
    const [pageNum, setPageNum] = useState<number>(1)
    // const [searchString, setSearchString] = useState<string>('')
    return (
        <PageNumber.Provider value={pageNum}>
            <PageDispatch.Provider value={setPageNum}>
                {/* <SearchState.Provider value={searchString}>
                    <SearchDispatch.Provider value={setSearchString}> */}
                        {children}
                    {/* </SearchDispatch.Provider>
                </SearchState.Provider> */}
            </PageDispatch.Provider>
        </PageNumber.Provider>
    )
}
