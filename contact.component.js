import './contact.component.css';
export function Contact() {
    return (
        <div>
            <h2 className="mt-3" style={{ "textAlign": "center", "color": "red" }}>Contact us</h2>
            <div className="row">
                <div className="col-6">
                    <img src={require('../../assets/images/img11.jpg')} width={"100%"} className='img rounded'></img>
                </div>
                <div className="col-6">
                    <h2 style={{ "textAlign": "center", "color": "green" }}>Realestate management</h2>
                    <form className='mt-3 com-form'>
                        <div class="form-group row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input type="email" class="form-control" id="inputEmail3" placeholder="Enter Email"></input>
                            </div>
                        </div>
                        <div class="form-group row mt-3">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">Comment</label>
                            <div class="col-sm-10">
                                <textarea className="form-control" rows="4" placeholder="Enter Comment"></textarea>
                            </div>
                        </div>
                        <fieldset class="form-group mt-3">
                            <div class="row">
                                <legend class="col-form-label col-sm-2 pt-0">Type of Property</legend>
                                <div class="col-sm-10">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked></input>
                                        <label class="form-check-label" for="gridRadios1">
                                            Villa
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"></input>
                                        <label class="form-check-label" for="gridRadios2">
                                            Apartment
                                        </label>
                                    </div>
                                    <div class="form-check ">
                                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" ></input>
                                        <label class="form-check-label" for="gridRadios3">
                                            Home
                                        </label>
                                    </div>
                                    <div class="form-check ">
                                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" ></input>
                                        <label class="form-check-label" for="gridRadios3">
                                            Land
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <div class="form-group row mt-2">
                            <div class="col-sm-2">Terms & Conditions</div>
                            <div class="col-sm-10">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck1"></input>
                                    <label class="form-check-label" for="gridCheck1">
                                        I agree
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4 button-1">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                            <div class="col-4">
                                <button type="reset" class="btn btn-danger">Cancle</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}