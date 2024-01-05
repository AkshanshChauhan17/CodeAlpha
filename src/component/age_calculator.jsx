import { useEffect, useState } from "react"

export default function CalculateAge({date, cb}) {
    const [ageC, setAgeC] = useState(Date());
    useEffect(()=>{
        var currentDate = new Date();
        var birthDateObj = new Date(date);

        var years = currentDate.getFullYear() - birthDateObj.getFullYear();
        var months = currentDate.getMonth() - birthDateObj.getMonth();
        var days = currentDate.getDate() - birthDateObj.getDate();

        if (months < 0 || (months === 0 && days < 0)) {
            years--;
        }

        setAgeC({
            years: years,
            months: months < 0 ? months + 12 : months,
            days: days < 0 ? days + 30 : days
        });
    }, [date]);
    return (
        <div className="date-calculated">
            <button onClick={()=>cb(false)}>back</button>
            <br />
            <br />
            <hr />
            <br />
            <h1><b>Years: </b>{ageC.years}</h1> 
            <h2><b>Months: </b>{ageC.months}</h2>
            <h2><b>Days: </b>{ageC.days}</h2>
            <br />
            <hr />
        </div>
    )
}