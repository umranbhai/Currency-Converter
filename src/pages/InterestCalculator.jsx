import { useState } from "react";
export default function InterestCalculator() {
    const [principalAmount, setPrincipalAmount] = useState(0);
    const [rateOfInterest, setRateOfInterest] = useState(0);
    const [time, setTime] = useState(0);
    const [interest, setInterest] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const handleCalculate = (e) => {
        e.preventDefault();
        if (principalAmount == 0 || rateOfInterest == 0 || time == 0) {
            console.log(typeof time, typeof principalAmount, typeof rateOfInterest);
            alert("Please enter valid values");
            return;
        } else {
            const interest = (principalAmount * rateOfInterest * time) / 100;
            setInterest(interest);
            const totalAmount = principalAmount + interest;
            setTotalAmount(totalAmount);
        }
    }
    return (
        <section className='paddingHorizontal paddingVertical flex items-start justify-center bg-black text-white h-sceen'>
            <div className='mt-10 paddingVertical flex items-center justify-center w-full lg:w-[500px]'>
                <div className='flex flex-col border border-black p-5 w-full bg-white text-black rounded-lg'>
                    <div className='text-bold text-2xl text-center'>Interest Calculator</div>
                    <form action="" onSubmit={handleCalculate}>
                        <div className='flex flex-col pt-5 flex items-center justify-center gap-2'>
                            <div className='w-full'>
                                <label htmlFor="" className='text-bold'>Principal Amount</label>
                                <input name="principalAmount" type="number" placeholder='Enter Amount' value={principalAmount} onChange={(e) => setPrincipalAmount(e.target.value)} className='w-full border border-black rounded-lg p-2' />
                            </div>
                            <div className='w-full'>
                                <label htmlFor="" className='text-bold'>Rate of Interest</label>
                                <input name="rateOfInterest" type="number" placeholder='Enter Amount' value={rateOfInterest} onChange={(e) => setRateOfInterest(e.target.value)} className='w-full border border-black rounded-lg p-2' />
                            </div>
                            <div className='w-full'>
                                <label htmlFor="" className='text-bold'>Year</label>
                                <input name="time" type="number" placeholder='Enter Amount' value={time} onChange={(e) => setTime(e.target.value)} className='w-full border border-black rounded-lg p-2' />
                            </div>
                            <div className='w-full'>
                                <button className='bg-black text-white py-2 px-5 rounded-lg w-full text-bold cursor-pointer' type="submit">Calculate</button>
                            </div>
                            <div className='w-full'>
                                <button className='bg-black text-white py-2 px-5 rounded-lg w-full text-bold cursor-pointer' onClick={(e) => {
                                    e.preventDefault();
                                    setPrincipalAmount(0);
                                    setRateOfInterest(0);
                                    setTime(0);
                                    setInterest(0);
                                    setTotalAmount(0);
                                }}>Reset</button>
                            </div>
                        </div>
                        <div className='mt-5 flex lg:flex-row flex-col items-center justify-center w-full lg:gap-5 gap-2'>
                            <div className='bg-black text-white py-2 px-5 rounded-lg w-full text-bold'>Interest : {interest}</div>
                            <div className='bg-black text-white py-2 px-5 rounded-lg w-full text-bold'>Total Amount : {totalAmount}</div>
                        </div>
                    </form>
                </div>
            </div>
        </section>)

}


