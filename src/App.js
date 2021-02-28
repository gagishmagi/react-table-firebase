    import React, { Component } from 'react';
    import ReactTable from "react-table-6";
    import "react-table-6/react-table.css";
    import {db} from './firebase'

    console.log(db)

    class App extends Component {
      render() {
         const data = [{
            fullName: 'Ayaan sdsd',
            subject: 26
            },{
             fullName: 'Ahana',
             subject: 22
             },{
             fullName: 'Peter',
             subject: 40
             },{
             fullName: 'Virat',
             subject: 30
             },{
             fullName: 'Rohit',
             subject: 32
             },{
             fullName: 'Dhoni',
             subject: 37
             }]
         const columns = [{
           Header: 'Full Name',
           accessor: 'fullName'
           },{
           Header: 'Subject',
           accessor: 'subject'
           },
          {
            Header: 'RollNo',
            accessor: 'rollNo'
          },
          {
            Header: 'Class',
            accessor: 'class'
          }]
        return (
              <div>
                <h1>React Data Table</h1>
                  <ReactTable
                      data={data}
                      columns={columns}
                      defaultPageSize = {2}
                      pageSizeOptions = {[2,4, 6]}
                  />
              </div>
        )
      }
    }
    export default App;
