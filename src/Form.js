import React from 'react'

import {GESelector, YearSelector, DeptSelector} from './Selectors'

const Form = props => {
    const {GE, Dept, Year, setGE, setDept, setYear} = props

    return(
        <div style={{display:'flex', flexDirection:'row'}}>
            <div style={{float:'left', display:'flex', flexDirection:'column', width:'150px'}}>
                <b>General Education: </b>
                <b>Department Name:	</b>
                <b>Term:</b>
            </div>
            <div style={{float:'right', display:'flex', flexDirection:'column', width:'200px'}}>
                <GESelector Dept={GE} setGE={(value)=>setGE(value)}/>
                <DeptSelector Dept={Dept} setDept={(value)=>setDept(value)}/>
                <YearSelector Year={Year} setYear={(value)=>setYear(value)} />
            </div>
        </div>
    )
}

export default Form