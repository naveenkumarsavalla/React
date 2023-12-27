export function String(){
    // String type of Property View type
  let regid=1;
  let type="Villa";
  let regowner="Naveen";
  let address="Kothagudem";
  let description="So beautyfull and spacius";

  let regid1=2;
  let type1="Aparrt";
  let regowner1="Rajeev";
  let address1="Prakasham";
  let description1="Beautyfull";

  let regid2=3;
  let type2="Flat";
  let regowner2="Sundar";
  let address2="Karnool";
  let description2="Good";

  let regid3=4;
  let type3="House";
  let regowner3="Pasha";
  let address3="Sathupally";
  let description3="Better";

  let regid4=5;
  let type4="Home";
  let regowner4="Mohan Sai";
  let address4="Naidupeta";
  let description4="Good";

  // String type of Property type View

  let Id=1;
  let Type="Villa";
  let Description="Beautydull and Peacefull Property";
  let Address="Kothagudem";

  let Id1=2;
  let Type1="Apartment";
  let Description1="Larg space";
  let Address1="KPHB,Hyderabad";

  let Id2=3;
  let Type2="Flat";
  let Description2="Beautyfull";
  let Address2="Miyapur";

  let Id3=4;
  let Type3="House";
  let Description3="Peacefull place";
  let Address3="Ameerpet";
    return(
         // String type of Property View type
    <div>
        <h2 style={{"textAlign":"center", "color":"red"}}>Property View (String)</h2>
        <table className='table table-border table-hover table-striped'>
            <thead className='table table-primary'>
                <tr>
                <th>Reg id</th>
                <th>Type</th>
                <th>Reg Owner</th>
                <th>Address</th>
                <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{regid}</td>
                <td>{type}</td>
                <td>{regowner}</td>
                <td>{address}</td>
                <td>{description}</td>
                </tr>
                <tr>
                <td>{regid1}</td>
                <td>{type1}</td>
                <td>{regowner1}</td>
                <td>{address1}</td>
                <td>{description1}</td>
                </tr>
                <tr>
                <td>{regid2}</td>
                <td>{type2}</td>
                <td>{regowner2}</td>
                <td>{address2}</td>
                <td>{description2}</td>
                </tr>
                <tr>
                <td>{regid3}</td>
                <td>{type3}</td>
                <td>{regowner3}</td>
                <td>{address3}</td>
                <td>{description3}</td>
                </tr>
                <tr>
                <td>{regid4}</td>
                <td>{type4}</td>
                <td>{regowner4}</td>
                <td>{address4}</td>
                <td>{description4}</td>
                </tr>
            </tbody>
        </table>

           {/* String type of Property type View */}

              
           <h2 style={{"textAlign":"center", "color":"red"}}>Property Type View (String)</h2>
              <table className='table table-border table-hover table-striped'>
                <thead className='table table-primary'>
                  <tr>
                    <th>Reg id</th>
                    <th>Type</th>
                    <th>Reg Owner</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{Id}</td>
                    <td>{Type}</td>
                    <td>{Description}</td>
                    <td>{Address}</td>
                  </tr>
                  <tr>
                    <td>{Id1}</td>
                    <td>{Type1}</td>
                    <td>{Description1}</td>
                    <td>{Address1}</td>
                  </tr>
                  <tr>
                    <td>{Id2}</td>
                    <td>{Type2}</td>
                    <td>{Description2}</td>
                    <td>{Address2}</td>
                  </tr>
                  <tr>
                    <td>{Id3}</td>
                    <td>{Type3}</td>
                    <td>{Description3}</td>
                    <td>{Address3}</td>
                  </tr>
                </tbody>  
              </table>
    </div>   
      
    );
}