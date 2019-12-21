import React from 'react'
import {callWebSocAPI} from './api/websocapi'
import Table from './Table'

class Fetch extends React.Component{

  propsCompare(newProps){
    return this.props.GE !== newProps.GE || this.props.Dept !== newProps.Dept || this.props.Year !== newProps.Year  
  }

  notValidInput(){
    return (this.props.GE.trim() === 'ANY' || this.props.GE === null) && (this.props.Dept.trim() === 'ALL' || this.props.Dept === null)
  }

  async componentDidUpdate(prevProps){
    if (this.propsCompare(prevProps)){
      const {GE, Dept, Year, updateSelect, updateData, updateLoading} = this.props
      if (this.notValidInput()){
        updateSelect(true)
      }
      else{
        updateSelect(false)
        // console.log("New", GE, Dept, Year)
        const opts = {
          term: Year,
          GE: GE,
          department: Dept
        }
        updateLoading(true)
        await callWebSocAPI(opts, (data) => {
          updateData(data)
          updateLoading(false)
        })
      }
      
    }
  }
  

  render(){
    const {select, data, loading} = this.props
    return (
        <div>
          {
            select === true ?
            <p>Select one of year dept and ge</p>
            :
            loading || data===null? 
            <p>Loading...</p> :

            data.length > 0 ?
            // <p>Loaded. Now draw table here</p>
            <Table data={data}/>
            :
            <p>No Data</p>
          }
        </div>
      )
  }
}

export default Fetch