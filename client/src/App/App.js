import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
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
      <>
            {alert.message && (
              <div className={`alert ${alert.type}`}>{alert.message}</div>
            )}
            <BrowserRouter>
              <Switch>
                <Route path="/admin" render={props => <AdminLayout {...props} />} />
                <Route path="/teacher" render={props => <TeacherLayout {...props} />} />
                <Route path="/student" render={props => <StudentLayout {...props} />} />
                <Route path="/auth" render={props => <AuthLayout {...props} />} />
                <Redirect from="/" to="/auth" />
              </Switch>
            </BrowserRouter>
          </>
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
