import Form from "./form";
import Joi from "joi-browser";
class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().min(2).label("Name"),
  };
  doSubmit = () => {
    //call server
    console.log("Registered.");
  };
  render() {
    return (
      <div className="container">
        <div className="row d-flex justify-content-center align-item-center mt-5 mb-5">
          <h1 className="text-center">Register</h1>
          <div className="col-lg-4">
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password", "password")}
              {this.renderInput("name", "Name")}
              {this.renderButton("Register")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
