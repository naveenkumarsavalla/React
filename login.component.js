export function Login(){
    return(
        <form>
            <h2 style={{"textAlign":"center","color":"green"}} className="mt-4">Login</h2>
            <div>
                <div className="col-md-9 mt-4">
                    <div className="form-group row" style={{"marginLeft":"300px"}}>
                        <label className="col-sm-3 col-form-label">Email</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" placeholder="Enter Email"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-9 mt-5">
                    <div className="form-group row" style={{"marginLeft":"300px"}}>
                        <label className="col-sm-3 col-form-label">Password</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" placeholder="Enter Password"/>
                        </div>
                    </div>
                </div>
                <div className="mt-5" style={{"marginLeft":"450px"}}>
                    {/* <Link to = "/Registration">Registration</Link> */}
                    <label style={{"color":"blue","cursor":"pointer"}}>Forget Password | <span style={{"color":"red"}}>Registration</span></label>
                </div>
                <div className="col-9">
                    <input type='button' className='btn btn-outline-primary' value="login" style={{"marginLeft":"500px"}}></input>
                    <input type='button' className='btn btn-outline-danger' value="Cancle" ></input>
                </div>
            </div>
        </form>
    )
}