import React from 'react'
import Chart from "react-apexcharts";

const convertTime12to24 = (hours, minutes, ampm) => {  
  
    if (hours === 12) {
      hours = 0;
    }
  
    if (ampm === 'p') {
      hours = hours + 12;
    }
  
    return [hours, minutes];
}

const splitTimeInSection = (t, s) => {
    const r = []
    for (let i = 0; i < s; ++i){
        r.push(t+i)
    }
    return r
}

const roundTime = (startH, startM, endH, endM) => {
    const H = endH - startH
    const M = endM - startM
    if (M === 20) //we will round down
        return splitTimeInSection(startH,H)
    if (M === 50)
       return splitTimeInSection(startH,H+1)
    
}

const splitTime = (start, end, ampm) => {
    const [startHr,startMin] = start.split(':').map(v => parseInt(v,10))
    const [endHr,endMin] = end.split(':').map(v => parseInt(v,10))

    if (ampm === 'p'){
        if (endHr >= 12 && startHr < 12){
            const [startH,startM] = convertTime12to24(startHr, startMin)
            const [endH,endM] =  convertTime12to24(endHr,endMin,ampm)
            // console.log("Start", startH,":",startM, "End", endH,":",endM)   
            return roundTime(startH, startM, endH, endM)
        }
        else{
            const [startH,startM] = convertTime12to24(startHr, startMin, ampm)
            const [endH,endM] =  convertTime12to24(endHr,endMin,ampm)
            // console.log("Start", startH,":",startM, "End", endH,":",endM)   
            return roundTime(startH, startM, endH, endM)
        }
    }
    else{
        const [startH,startM] = convertTime12to24(startHr, startMin, ampm)
        const [endH,endM] =  convertTime12to24(endHr,endMin,ampm)
        // console.log("Start", startH,":",startM, "End", endH,":",endM)  
        return roundTime(startH, startM, endH, endM)
    }
}

const emptyObject = () => {
    const arr = {}
    for (let i = 8; i < 22; ++i){
        arr[i] = 0
    }
    return arr
}

const cleanUpData = data => {
    const cleanData = {
        'M': [],'T': [],'W': [],'Th': [],'F': []
    }

    for (const school of data){
        for (const dept of school._departments){
            for (const course of dept._courses){
                for (const section of course._sections){
                    for (const meetings of section.meetings){
                        const meeting = meetings[0]
                        if (meeting.trim() !== "TBA"){
                            const parsedMeeting = /([a-zA-Z]+)\s?(\d+[ap]?:\d+)(?:\s+)?-(?:\s+)?(\d+:\d+)([ap]?)/.exec(meeting)
                            const [days, start, end, ampm] = parsedMeeting.slice(1, 5)
                            // console.log(days, start, end, ampm)
                            const meetingDays = /(M)?(W)?(F)?(Tu)?(Th)?/.exec(days)
                            const [m, t, w, th, f] = meetingDays.slice(1,6)
                            const arr = splitTime(start, end, ampm)
                            // console.log(arr)
                            if (m !== undefined){
                                cleanData.M = [...cleanData.M, ...arr]
                            }
                            if (t !== undefined){
                                cleanData.T = [...cleanData.T, ...arr]
                            }
                            if (w !== undefined){
                                cleanData.W = [...cleanData.W, ...arr]
                            }
                            if (th !== undefined){
                                cleanData.Th = [...cleanData.Th, ...arr]
                            }
                            if (f !== undefined){
                                cleanData.F = [...cleanData.F, ...arr]
                            }
                            // console.log(m,t,w,th,f)
                        }
                    }
                }
            }
        }
    }

    for (const k in cleanData){
        const arr = emptyObject()
        for (const v of cleanData[k]){
            if (arr[v] > 0){
                arr[v] += 1
            }
            else{
                arr[v] = 1
            }
        }
        cleanData[k] = arr
    }

    for (const k in cleanData){
        const arr = []
        for (const j in cleanData[k]){
            arr.push(
                {
                    x : j,
                    y: cleanData[k][j]
                }
            )
        }
        cleanData[k] = arr
    }
    console.log(cleanData)
    return cleanData
}

const DataTable = props => {
    const {data} = props
    const cleanData = cleanUpData(data)
    const options = {
        dataLabels: {
            enabled: false
        },
        colors: ["#008FFB"],

        title: {
            text: 'Days vs Time'
        },
    }
    const series = [
    {
        name: 'Monday',
        data: cleanData.M
    },
    {
        name: 'Tuesday',
        data: cleanData.T
    },
    {
        name: 'Wednesday',
        data: cleanData.W
    },
    {
        name: 'Thursday',
        data: cleanData.Th
    },
    {
        name: 'Friday',
        data: cleanData.F
    }
    ]
    return (
        <div>
            <Chart 
                options={options} 
                series={series}
                type='heatmap'
                height="350"
            />
        </div>
    )
}

export default DataTable