import { useState, useEffect } from 'react';

function Home() {
    const [Amount, setAmount] = useState(0);
    const [From, setFrom] = useState('USD');
    const [To, setTo] = useState('INR');
    const [Rate, setRate] = useState({});
    const [ConvertedAmount, setConvertedAmount] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "Amount":
                if (value >= 0) {
                    setAmount(value);
                }
                break;
            case "From":
                setFrom(value);
                console.log(From);
                break;
            case "To":
                setTo(value);
                console.log(To);
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${From}`);
                const data = await response.json();
                console.log(data);
                setRate(data.rates);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCurrency();
    }, [From])

    useEffect(() => {
        const convertCurrency = () => {
            const fromRate = Rate[From];
            const toRate = Rate[To];
            const convertedAmount = (Amount * toRate) / fromRate;
            console.log(convertedAmount);
            setConvertedAmount(convertedAmount);

        }
        convertCurrency();
    }, [Amount, From, To, Rate])

    return (
        <>
            <section className='paddingHorizontal paddingVertical flex items-start justify-center bg-black text-white h-screen'>
                {/* <h1 className='text-bold text-2xl text-center'>Home Page</h1> */}

                <div className='mt-10 paddingVertical flex justify-center'>
                    <div className='flex flex-col border border-black p-5 w-full bg-white text-black rounded-lg'>
                        <div className='text-bold text-2xl text-center'>Currency Converter</div>
                        <div className='mt-5 flex lg:flex-row flex-col items-center justify-center gap-5'>

                            <div className='lg:w-[30%] w-full'>
                                <label htmlFor="" className='text-bold'>Amount</label>
                                <input value={Amount} name="Amount" onChange={handleChange} type="number" placeholder='Enter Amount' className='w-full border border-black rounded-lg p-2' />
                            </div>
                            <div className='lg:w-[30%] w-full'>
                                <label htmlFor="" className='text-bold'>From</label>
                                <select value={From} name="From" onChange={handleChange} id="" className='w-full border border-black rounded-lg p-2'    >
                                    {Object.keys(Rate).map((item) => (
                                        <option key={item} value={item}>{item}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='lg:w-[30%] w-full'>
                                <label htmlFor="" className='text-bold'>To</label>
                                <select value={To} name="To" onChange={handleChange} id="" className='w-full border border-black rounded-lg p-2'>
                                    {Object.keys(Rate).map((item) => (
                                        <option key={item} value={item}>{item}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className='mt-5 flex items-center justify-center w-full'>
                            <div className='bg-black text-white py-2 px-5 rounded-lg lg:w-[60%] text-bold'>Currency Amount : {ConvertedAmount}</div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Home
