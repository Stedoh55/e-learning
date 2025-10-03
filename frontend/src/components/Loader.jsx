export default function Loader() {
    return (
        <div>
            {/* Spin Loader */}
            <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>

            {/* Pulse Loader */}
            {/* <div className="flex justify-center items-center h-screen space-x-2">
                <div className="w-5 h-5 bg-blue-500 rounded-full animate-pulse" ></div>
                <div className="w-5 h-5 bg-blue-500 rounded-full animate-pulse" ></div>
                <div className="w-5 h-5 bg-blue-500 rounded-full animate-pulse" ></div>
            </div> */}

            {/* Dots Loader */}
            {/* <div className="flex justify-center items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay: -0.3s]"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay: -0.6s]"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay: -0.9s]"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay: -1.2s]"></div>
            </div> */}

            {/* Skeleton Loaders */}
            {/* <div className="animate-pulse space-y-3 p-4">
                <div className="h-6 bg-gray-300 rounded"></div>
                <div className="h-6 bg-gray-300 rounded"></div>
                <div className="h-6 bg-gray-300 rounded"></div>
            </div> */}
            
        </div>
       
    )
}