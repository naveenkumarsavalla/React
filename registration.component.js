export function Registration() {

    return(
<form className="form-group">
    <h2 className="mt-3" style={{"textAlign":"center","color":"red"}}>User registration</h2>
    <div className="row mt-3">
        <div className="col-md-6">
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">First Name</label>
                <div className="col-sm-9">
                    <input type="text" className="form-control" placeholder="First Name" />
                </div>
            </div>
        </div>
        <div className="col-md-6">
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">Last Name</label>
                <div className="col-sm-9">
                    <input type="text" className="form-control" placeholder="Last Name" />
                </div>
            </div>
        </div>
    </div>
    <div className="row mt-2">
        <div className="col-md-6">
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">Email</label>
                <div className="col-sm-9">
                    <input type="text" className="form-control" placeholder="Enter Email" />
                </div>
            </div>
        </div>
        <div className="col-md-6">
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">Mobile Number</label>
                <div className="col-sm-9">
                    <input type="text" className="form-control" placeholder="Enter Mobile Number" />
                </div>
            </div>
        </div>
    </div>
    <div className="row mt-2">
        <div className="col-md-6">
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">Password</label>
                <div className="col-sm-9">
                    <input type="text" className="form-control" placeholder="Enter Password" />
                </div>
            </div>
        </div>
        <div className="col-md-6">
            <div className="form-group row">
                <label className="col-sm-4 col-form-label">Conform Password</label>
                <div className="col-sm-8">
                    <input type="text" className="form-control" placeholder="Enter Conform Password" />
                </div>
            </div>
        </div>
    </div>
    <div className="form-group row mt-2">
        <label className="col-1">Address</label>
        <div className="col-8">
            <textarea className="form-control" rows="4" placeholder="Enter Address"></textarea>
        </div>
    </div>
    <div class="row p-2">
        <label class="col-1"></label>
        <div class="col-6 d-grid gap-1 mx-auto">
            <input type="button" class="btn btn-outline-primary mt-2" value="Login"></input>
            <input type="reset" class="btn btn-outline-danger mt-2" value="Cancel"></input>
        </div>
    </div>
</form>

       
    )

}