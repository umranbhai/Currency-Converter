import { useState } from "react";
const About = () => {
    const [Height, setHeight] = useState(0);
    const [Weight, setWeight] = useState(0);
    const [Age, setAge] = useState(0);
    const [BMI, setBMI] = useState(0);
    const [Status, setStatus] = useState("");
    const handleCalculate = (e) => {
        e.preventDefault();
        if (Height === 0 || Weight === 0 || Age === 0) {
            alert("Please enter valid height, weight and age");
            return;
        }

        const HeightM = Height * 0.3048;
        const bmi = Weight / (HeightM * HeightM);
        const bmiValue = bmi.toFixed(2);
        setBMI(bmiValue);
        if (BMI < 18.5) {
            setStatus("Underweight");
        } else if (BMI >= 18.5 && BMI < 24.9) {
            setStatus("Normal");
        } else if (BMI >= 25 && BMI < 29.9) {
            setStatus("Overweight");
        } else {
            setStatus("Obesity");
        }

    }
    return <section className='paddingHorizontal paddingVertical flex items-start justify-center bg-black text-white h-sceen'>
        {/* <h1 className='text-bold text-2xl text-center'>BMI Calculator</h1> */}

        <div className='mt-10 paddingVertical flex items-center justify-center'>
            <div className='flex flex-col border border-black p-5 w-full bg-white text-black rounded-lg'>
                <div className='text-bold text-2xl text-center'>BMI Calculator</div>
                <form onSubmit={handleCalculate} action="">

                    <div className='flex flex-col pt-5 flex items-center justify-center gap-2'>
                        <div className='w-full'>
                            <label htmlFor="" className='text-bold'>Age</label>
                            <input value={Age} name="age" type="number" onChange={(e) => setAge(e.target.value)} placeholder='Enter Amount' className='w-full border border-black rounded-lg p-2' />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="" className='text-bold'>Height</label>
                            <input value={Height} name="height" type="number" onChange={(e) => setHeight(e.target.value)} placeholder='Enter Amount' className='w-full border border-black rounded-lg p-2' />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="" className='text-bold'>Weight</label>
                            <input value={Weight} name="weight" type="number" onChange={(e) => setWeight(e.target.value)} placeholder='Enter Amount' className='w-full border border-black rounded-lg p-2' />
                        </div>
                        <div className='w-full'>
                            <button className='bg-black text-white py-2 px-5 rounded-lg w-full text-bold cursor-pointer' type="submit">Calculate</button>
                        </div>
                        <div className='w-full'>
                            <button className='bg-black text-white py-2 px-5 rounded-lg w-full text-bold cursor-pointer' onClick={(e) => {
                                e.preventDefault();
                                setBMI(0);
                                setHeight(0);
                                setWeight(0);
                                setAge(0);
                            }}>Reset</button>
                        </div>
                    </div>
                    <div className='mt-5 flex items-center justify-center w-full'>
                        <div className='bg-black text-white py-2 px-5 rounded-lg w-full text-bold'>BMI : {BMI} {Status}</div>
                    </div>
                </form>
            </div>
        </div>

    </section>

}

export default About