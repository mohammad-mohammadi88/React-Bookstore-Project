import Body from "./Components/Body/Body";
import Nav from "./Components/Nav/Nav";
import { FC, 
    // useLayoutEffect,
    // useState 
} from "react";
// import fetchBook from "./fetchBook"
// import { useParams } from "react-router"
import { product } from "../../interfaces/product";
const Book: FC = () => {
    // const [data, setData] = useState<product[]>([])
    // const params :any = useParams()
    const fakeData: product[] = [
        {
            id: "c632bd79-d1cd-4757-b974-30b89271a964",
            title: "جنایت و مکافات",
            image: "https://domobook.ir/wp-content/uploads/%D8%AC%D9%86%D8%A7%DB%8C%D8%AA-%D9%88-%D9%85%DA%A9%D8%A7%D9%81%D8%A7%D8%AA-1.jpg",
            summary: "string",
            author: "string",
            price: 250,
            quantity: 92,
        },
    ];
    // useLayoutEffect(()=>{
    //     fetchBook(params.slug).then((res)=>setData(res.data.data))
    // },[])
    return (
        <>
            <Nav />
            <Body bookData={fakeData[0]}/>
        </>
    );
};

export default Book;
