import React from "react"

export const Table = ({ data }) => {
    return (
        <div className='w-full'>
            <div className="flex justify-between mb-5">
                <div className="w-[20%] ">Name</div>
                <div className="w-[20%] ">Surname</div>
                <div className="w-[20%] ">Email</div>
                <div className="w-[20%] ">Gender</div>
            </div>

            {
                data.map((item) => (
                    <div key={item.id} className="flex justify-between text-start w-full bg-gray-900" >
                        <div className="w-[20%]">{item.first_name}</div>
                        <div className="w-[20%]">{item.last_name}</div>
                        <div className="w-[20%]">{item.email}</div>
                        <div className="w-[20%]">{item.gender}</div>
                    </div>
                ))}

        </div>
    )
}