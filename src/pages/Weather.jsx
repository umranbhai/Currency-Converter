import { useState, useEffect } from "react";



export default function Weather() {
    const [City, setCity] = useState("Ahmedabad");
    const [WeatherData, setWeatherData] = useState(null)
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const month = monthNames[new Date().getMonth()];
    const date = new Date().getDate();
    const year = new Date().getFullYear();
    const currentDate = `${month} ${date}, ${year}`;

    const fetchWeather = async () => {
        try {
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=c19c7b51e02d40a88dd133219250607&q=${City}&aqi=no`);
            const data = await response.json();
            setWeatherData(data)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }



    useEffect(() => {
        fetchWeather();
    }, [])

    const handleSearch = (e) => {
        e.preventDefault();
        fetchWeather();
    }



    return (
        <div>
            <section className="paddingHorizontal paddingVertical flex items-start justify-center bg-black text-white h-[calc(100vh-5rem)]">
                <div className="mt-10 paddingVertical flex items-center justify-center w-full lg:w-[50%]">
                    {
                        WeatherData && (
                            <>
                                <div className="flex flex-col items-center justify-between border border-black p-5 w-[500px] bg-white text-black rounded-lg">
                                    <div className="text-bold text-2xl text-center">Weather App</div>
                                    <div className="mt-5 bg-black text-white text-2xl py-2 px-5 rounded-lg w-auto text-bold">{WeatherData.location.name}</div>
                                    <form className="mt-5 flex items-center justify-center w-full" onSubmit={handleSearch}>
                                        <input type="text" placeholder="Enter City" className="w-[80%] border border-black rounded-l-lg p-2 focus:outline-none" name="City" onChange={(e) => setCity(e.target.value)} />
                                        <button className="bg-black text-white py-2 px-5 lg:w-[20%] text-bold rounded-r-lg border border-black cursor-pointer" type="submit">Search</button>
                                    </form>

                                    <div className="mt-5  grid grid-cols-2 gap-5 w-full">
                                        <div className="mt-5 flex items-center justify-center">
                                            <img className="text-black w-30 h-30" src={WeatherData.current.condition.icon} alt="" />
                                        </div>
                                        <div className="bg-black text-white py-2 px-5 rounded-lg w-auto text-bold">{currentDate}<br />{WeatherData.location.region} {WeatherData.location.country}<br />{WeatherData.location.localtime}</div>
                                        <div className="bg-black text-white py-2 px-5 rounded-lg w-full text-bold">Temperature : {WeatherData.current.temp_c}</div>
                                        <div className="bg-black text-white py-2 px-5 rounded-lg w-auto text-bold">Weather : {WeatherData.current.condition.text}</div>
                                        <div className="bg-black text-white py-2 px-5 rounded-lg w-full text-bold">Wind Speed : {WeatherData.current.wind_kph}</div>
                                        <div className="bg-black text-white py-2 px-5 rounded-lg w-full text-bold">Humidity : {WeatherData.current.humidity}</div>
                                        <div className="bg-black text-white py-2 px-5 rounded-lg w-full text-bold">Pressure : {WeatherData.current.pressure_mb}</div>
                                        <div className="bg-black text-white py-2 px-5 rounded-lg w-full text-bold">Wind Direction : {WeatherData.current.wind_dir}</div>

                                    </div>

                                </div>
                            </>
                        )
                    }
                </div>
            </section>
        </div>
    )
}