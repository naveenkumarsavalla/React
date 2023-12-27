export function Object(){

    // Object type of Property View type
   let propertyview={
    id: 1,
    Type: "Villa",
    Registrername: "Naveen",
    address: "Kothagudem",
    Description: "So beautifull and spacies",

    id2: 2,
    Type2: "House",
    Registrername2: "Rajeev",
    address2: "Prakasham",
    Description2: "Good",

    id3: 3,
    Type3: "Apartment",
    Registrername3: "PAsha",
    address3: "Sathupally",
    Description3: "Beautyfull",

    id4: 4,
    Type4: "Home",
    Registrername4: "Sundhar",
    address4: "Karnool",
    Description4: "Good Looking",

    id5: 5,
    Type5: "Land",
    Registrername5: "Mohan",
    address5: "Naidupeta",
    Description5: "250Sqy",
};
// Object type of Property type View

let propertytypeview={
  
  Id: 1,
  Type: "Villa",
  Description: "So beautifull and spacies",
  Address:"Kothagudem",

  Id1: 2,
  Type1: "Appartment",
  Description1: "Good Loocking",
  Address1:"KPHB",

  Id2: 3,
  Type2: "Flat",
  Description2: "Peacefulkl place",
  Address2:"LB nager",

  Id3: 4,
  Type3: "Home",
  Description3: "Extreame Look",
  Address3:"Ameetpet",

};

    return(
        
        <div>
            {/* object type of Property View type */}
      <h2 style={{"textAlign":"center", "color":"red"}}>Property View (Object)</h2>
      <table className='table table-border table-hover table-striped'>
        <thead className='table table-success'>
                  <tr>
                    <th>id</th>
                    <th>Type</th>
                    <th>Reg Owner</th>
                    <th>address</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{ propertyview.id }</td>
                    <td>{ propertyview.Type }</td>
                    <td>{ propertyview.Registrername}</td>
                    <td>{ propertyview.address }</td>
                    <td>{ propertyview.Description }</td>
                  </tr>
                  <tr>
                    <td>{ propertyview.id2 }</td>
                    <td>{ propertyview.Type2 }</td>
                    <td>{ propertyview.Registrername2}</td>
                    <td>{ propertyview.address2 }</td>
                    <td>{ propertyview.Description2 }</td>
                  </tr>
                  <tr>
                    <td>{ propertyview.id3 }</td>
                    <td>{ propertyview.Type3 }</td>
                    <td>{ propertyview.Registrername3}</td>
                    <td>{ propertyview.address3 }</td>
                    <td>{ propertyview.Description3 }</td>
                  </tr>
                  <tr>
                    <td>{ propertyview.id4 }</td>
                    <td>{ propertyview.Type4 }</td>
                    <td>{ propertyview.Registrername4}</td>
                    <td>{ propertyview.address4 }</td>
                    <td>{ propertyview.Description4 }</td>
                  </tr>
                  <tr>
                    <td>{ propertyview.id5 }</td>
                    <td>{ propertyview.Type5 }</td>
                    <td>{ propertyview.Registrername5 }</td>
                    <td>{ propertyview.address5 }</td>
                    <td>{ propertyview.Description5 }</td>
                  </tr>
                </tbody>
              </table>

            {/* Object type of Property type View */}
            <h2 style={{"textAlign":"center", "color":"red"}}>Property Type View (Object)</h2>
              <table className='table table-border table-hover table-striped'>
                <thead className='table table-success'>
                <tr>
                    <th>Id</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{propertytypeview.Id}</td>
                    <td>{propertytypeview.Type}</td>
                    <td>{propertytypeview.Description}</td>
                    <td>{propertytypeview.Address}</td>
                  </tr>
                  <tr>
                    <td>{propertytypeview.Id1}</td>
                    <td>{propertytypeview.Type1}</td>
                    <td>{propertytypeview.Description1}</td>
                    <td>{propertytypeview.Address1}</td>
                  </tr>
                  <tr>
                    <td>{propertytypeview.Id2}</td>
                    <td>{propertytypeview.Type2}</td>
                    <td>{propertytypeview.Description2}</td>
                    <td>{propertytypeview.Address2}</td>
                  </tr>
                  <tr>
                    <td>{propertytypeview.Id3}</td>
                    <td>{propertytypeview.Type3}</td>
                    <td>{propertytypeview.Description3}</td>
                    <td>{propertytypeview.Address3}</td>
                  </tr>
                </tbody>
              </table>
        </div>
    );
}

