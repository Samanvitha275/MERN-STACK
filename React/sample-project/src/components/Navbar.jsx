import React, { useEffect, useState } from 'react'
const Navbar = ({ appdata, logo }) => {
    const [numberstate, setNumberstate] = useState(0)
    const [stringstate, setStringstate] = useState("a")
    const [arraystate, setArraystate] = useState(["a", false, 0])


const [count, setCount] = useState(0);
useEffect(() => {
    console.log("Count is " + count)

}, [count])
return (
    <>
        <button className='w-[6rem] h-[4-rem] bg-blue-500 text-white'
            onClick={() => { setCount(count + 1) }}>

            count {count}
        </button>
    </>
)
}
export default Navbar