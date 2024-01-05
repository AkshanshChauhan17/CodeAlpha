import { useEffect, useState } from "react"

export default function CalculateAge({date}) {
    const [ageC, setAgeC] = useState(Date());
    useEffect(()=>{
        const nowDate = new Date();
        const nowDateSplit = nowDate.toISOString().split("T")[0].split("-");
        const dateSplit = date.split("-")
        const age = nowDateSplit[0] - dateSplit[0]
        console.log(dateSplit, nowDateSplit, age)

        setAgeC(age)
    }, [date]);
    return (
        <div className="date-calculated">
            <h1><b>Age: </b>{ageC}</h1>
        </div>
    )
}