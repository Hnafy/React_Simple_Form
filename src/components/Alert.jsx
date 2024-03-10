
export default function Alert({myCheck ,color,trigger,setTrigger}) {
    let message = myCheck
    return (
        <>
            {trigger && (
                <div
                    className=" absolute flex h-screen w-full items-center justify-center backdrop-blur-sm"
                    onClick={() => {
                        setTrigger(false)
                    }}
                >
                    <div className={`inset-0 rounded-sm ${color} px-6 py-2 text-3xl text-white`}>
                        {message}
                    </div>
                </div>
            )}
        </>
    )
}
