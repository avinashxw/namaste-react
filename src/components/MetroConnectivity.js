const MetroConnectivity = ({metrolines=[]}) => {
    return (
        <>
            <div>
                <ul className="p-2">
                    {
                        metrolines.map((item) => (
                            <li key={"m"+item} className="ml-2
        inline-flex
        items-center
        px-4 py-2
        rounded-full
        bg-gradient-to-r from-indigo-500 to-purple-600
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

export default MetroConnectivity;