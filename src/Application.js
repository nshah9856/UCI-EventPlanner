import React from 'react'
import Fetch from './Fetch'
import Form from './Form'

class Application extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            GE: 'ANY',
            Dept: 'ALL',
            Year: '2020-03', //Default is Winter 2020
            data: null,
            select: true,
            loading: true
        }
    }

    render(){
        const {GE, Dept, Year, select, data, loading} = this.state

        return (
            <div>   
                <Form 
                    GE={GE}
                    Dept={Dept}
                    Year={Year}
                    setGE={(value)=>this.setState({GE:value})}
                    setDept={(value)=>this.setState({Dept:value})}
                    setYear={(value)=>this.setState({Year:value})}
                />         
                <Fetch 
                    GE={GE} 
                    Dept={Dept} 
                    Year={Year} 
                    select={select} 
                    data={data} 
                    loading={loading}
                    updateSelect={(newSelect)=>this.setState({select:newSelect})} 
                    updateData={(newData) => this.setState({data: newData})}
                    updateLoading={(newLoad) => this.setState({loading: newLoad})}
                />
            </div>
        )
    }   
}

export default Application