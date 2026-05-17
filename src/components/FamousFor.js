import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const FamousFor = ({places=[]}) => {

    const dispatch = useDispatch();

    const handleActions = (item) => {
        // dispatch an action
        dispatch(addItem(item));
    };
    
    return (
        <>
            <div>
                <ul className="p-2">
                    {
                        places.map((item) => (
                            <li key={"p"+item} onClick={() => {handleActions(item)}} className="ml-2
        inline-flex
        items-center
        px-4 py-2
        rounded-full
        bg-linear-to-r from-indigo-500 to-purple-600
        text-white
        text-sm font-medium
        shadow-md
        hover:scale-105
        transition-all duration-300
      ">{item}</li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
};

export default FamousFor;