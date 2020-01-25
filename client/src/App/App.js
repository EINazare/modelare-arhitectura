import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { history } from "../_helpers";
import { alertActions } from "../_actions";
import { PrivateRoute } from "../_components";
import { HomePage } from "../HomePage";
import { LoginPage } from "../LoginPage";
import { RegisterPage } from "../RegisterPage";

import AdminLayout from "layouts/Admin";
import TeacherLayout from "layouts/Teacher";
import StudentLayout from "layouts/Student";
import AuthLayout from "layouts/Auth";

class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlerts();
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            {alert.message && (
              <div className={`alert ${alert.type}`}>{alert.message}</div>
            )}
            <Router history={history}>
              <Switch>
                <PrivateRoute exact  path="/admin" render={props => <AdminLayout {...props} />} />
                <PrivateRoute exact  path="/teacher" render={props => <TeacherLayout {...props} />} />
                <PrivateRoute exact  path="/student" render={props => <StudentLayout {...props} />} />
                <PrivateRoute exact  path="/auth" render={props => <AuthLayout {...props} />} />
              <Redirect from="*" to="/auth" />
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

const connectedApp = connect(
  mapState,
  actionCreators
)(App);
export { connectedApp as App };
