import Form from "./form";
import Joi from "joi-browser";
class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    //call server
    console.log("Submitted.");
  };

  render() {
    return (
      <div className="Container">
        <div className="row d-flex justify-content-center align-item-center  mt-5 mb-5">
          <h1 className="text-center">Login</h1>
          <div className="col-lg-4">
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password", "password")}
              {this.renderButton("Login")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
