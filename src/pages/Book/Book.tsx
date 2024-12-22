import Body from "./Components/Body/Body";
import Nav from "./Components/Nav/Nav";
import { FC, 
    useEffect,
    useState 
} from "react";
import fetchBook from "./fetchBook"
import { useParams } from "react-router"
import { product } from "../../interfaces/product";
const Book: FC = () => {
    const [data, setData] = useState<product>()
    const [error, setError] = useState<boolean>(false)
    const [loading, setLoading] = useState(true)
    const params :any = useParams()
    useEffect(()=>{
        fetchBook(params.slug)
        .then((res:any)=>{
            setData(res.data)
            setLoading(false)
        },()=>{
            setError(true)
            setLoading(false)
        })
    },[])
    return (
        <>
            <Nav />
            {data && !loading ?
                <Body bookData={data}/>
                : <h2 className="text-center text-4xl mt-8">loading...</h2>
            }
            { error ?
                <h2 className="text-center text-4xl mt-8">ببخشید یه مشکلی پیش آمده است!
                لطفا دوباره تلاش کنید!</h2>
                : ''
            }
        </>
    );
};

export default Book;
