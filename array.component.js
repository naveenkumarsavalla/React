export function Array(){

    //Array1 type of Property View type
let propertyviewarry=[
    {
      id:1,
      Name:"Naveen",
      Gmail:"n@gmail.com",
      Phoneno:"9999999999"
    },
    {
      id:2,
      Name:"Rajeev",
      Gmail:"r@gmail.com",
      Phoneno:"8888888888"
    },
    {
      id:3,
      Name:"Mohan",
      Gmail:"m@gmail.com",
      Phoneno:"7777777777"
    },{
      id:4,
      Name:"Pasha",
      Gmail:"p@gmail.com",
      Phoneno:"6666666666"
    },
  
  ]
  //Array1 type of Property View type
  let array1=[
    {
      id:1,
      Name:"Naveen",
      Gmail:"n@gmail.com",
      Phoneno:"999999999"
    },{
      id:1,
      Name:"Rajeev",
      Gmail:"r@gmail.com",
      Phoneno:"8888888888"
    },{  
      id:1,
      Name:"Pasha",
      Gmail:"p@gmail.com",
      Phoneno:"7777777777"
    },{
      id:1,
      Name:"Mohan",
      Gmail:"m@gmail.com",
      Phoneno:"6666666666"
    }
  ]

    return(
         //Array1 type of Property View type
        <div>
            <h2 style={{"textAlign":"center", "color":"red"}}>Property View (Array1)</h2>
            <table className='table table-border table-hover table-striped'>
                <thead className='table table-success'>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Gmail</th>
                        <th>Phoneno</th>
                    </tr>
                </thead>
                <thead>
                    <tr>
                      <td>{ propertyviewarry[0].id }</td>
                      <td>{ propertyviewarry[0].Name }</td>
                      <td>{ propertyviewarry[0].Gmail }</td>
                      <td>{ propertyviewarry[0].Phoneno }</td>
                    </tr>
                    <tr>
                      <td>{ propertyviewarry[1].id }</td>
                      <td>{ propertyviewarry[1].Name }</td>
                      <td>{ propertyviewarry[1].Gmail }</td>
                      <td>{ propertyviewarry[1].Phoneno }</td>
                    </tr>
                    <tr>
                        <td>{ propertyviewarry[2].id }</td>
                        <td>{ propertyviewarry[2].Name }</td>
                        <td>{ propertyviewarry[2].Gmail }</td>
                        <td>{ propertyviewarry[2].Phoneno }</td>
                    </tr>
                    <tr>
                      <td>{ propertyviewarry[3].id }</td>
                      <td>{ propertyviewarry[3].Name }</td>
                      <td>{ propertyviewarry[3].Gmail }</td>
                      <td>{ propertyviewarry[3].Phoneno }</td>
                    </tr>
                </thead>
            </table>
            {/* Arrat1 type of Property View type */}
            <div>
                <h2 style={{"textAlign":"center", "color":"red"}}>Property View (Array1)</h2>
                <table className='table table-border table-hover table-striped'>
                  <thead className='table table-danger'>
                    <tr>
                      <th>id</th>
                      <th>Name</th>
                      <th>Gmail</th>
                      <th>Phoneno</th>
                    </tr>  
                  </thead>
                  <tbody>
                  <tr>
                      <td>{ propertyviewarry[0].id }</td>
                      <td>{ propertyviewarry[0].Name }</td>
                      <td>{ propertyviewarry[0].Gmail }</td>
                      <td>{ propertyviewarry[0].Phoneno }</td>
                    </tr>
                  <tr>
                      <td>{ propertyviewarry[1].id }</td>
                      <td>{ propertyviewarry[1].Name }</td>
                      <td>{ propertyviewarry[1].Gmail }</td>
                      <td>{ propertyviewarry[1].Phoneno }</td>
                    </tr>
                  <tr>
                      <td>{ propertyviewarry[2].id }</td>
                      <td>{ propertyviewarry[2].Name }</td>
                      <td>{ propertyviewarry[2].Gmail }</td>
                      <td>{ propertyviewarry[2].Phoneno }</td>
                    </tr>
                  <tr>
                      <td>{ propertyviewarry[3].id }</td>
                      <td>{ propertyviewarry[3].Name }</td>
                      <td>{ propertyviewarry[3].Gmail }</td>
                      <td>{ propertyviewarry[3].Phoneno }</td>
                    </tr>
                  </tbody>
                </table>
                {/* Arrat1 type of Property View type */}
                <div>
                <h2 style={{"textAlign":"center", "color":"red"}}>Property View (Array2)</h2>
                <table className='table table-border table-hover table-striped'>
                <thead className='table table-danger'>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Gmail</th>
                      <th>Phoneno</th>
                    </tr>  
                  </thead>
                  <tbody>
                    {
                      array1.map((item,i,arr) =>
                      <tr>
                        <td>{ array1[i].id }</td>
                        <td>{ array1[i].Name }</td>
                        <td>{ array1[i].Gmail }</td>
                        <td>{ array1[i].Phoneno }</td>
                      </tr>
                      )
                    }
                  </tbody>
                </table> 
                </div>
            </div>
        </div>
    );

}