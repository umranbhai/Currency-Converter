import { useState } from "react";
export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <section className='paddingHorizontal paddingVertical flex items-start justify-center bg-black text-white h-[90vh]'>
            {/* <h1 className='text-bold text-2xl text-center'>BMI Calculator</h1> */}

            <div className='mt-10 paddingVertical flex items-center justify-center'>
                <div className='flex flex-col items-center justify-between border border-black p-5 w-[300px] bg-white text-black rounded-lg h-[40vh]'>
                    <div className='text-bold text-2xl text-center'>Counter</div>
                    <div className='mt-5 flex items-center justify-center w-full'>
                        <div className='bg-black text-white py-2 px-5 rounded-lg w-full text-bold'>Counter : {count}</div>
                    </div>

                    <div className='flex items-center justify-center w-full  gap-5'>
                        <button className='bg-black text-white py-2 px-5 rounded-lg w-full text-bold' onClick={() => count > 0 && setCount(count - 1)}>-</button>
                        <button className='bg-black text-white py-2 px-5 rounded-lg w-full text-bold' onClick={() => setCount(count + 1)}>+</button>
                    </div>
                    <div className='flex items-center justify-center w-full  gap-5'>
                        <button className='bg-black text-white py-2 px-5 rounded-lg w-full text-bold' onClick={() => setCount(0)}>Reset</button>
                    </div>
                </div>
            </div>

        </section>

    )
}
