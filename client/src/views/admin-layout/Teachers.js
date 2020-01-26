import React from "react";
import { connect } from "react-redux";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Table,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

import { userActions } from "_actions";

class Teachers extends React.Component {
  componentDidMount() {
    this.props.getAllTeachers();
  }
  render() {
    const { users } = this.props;
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row className="mt-5">
            <Col>
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">
                    Here are all of the Teachers from your School.
                  </h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Teacher</th>
                      <th scope="col">No. Classes</th>
                      <th scope="col" className="text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Jone Doe</td>
                      <td>teaches 4 classes</td>
                      <td className="text-right">
                        <Button color="default">Edit Teacher</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jane Dane</td>
                      <td>teaches 3 classes</td>
                      <td className="text-right">
                        <Button color="default">Edit Teacher</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Hans Fullman</td>
                      <td>teaches 3 classes</td>
                      <td className="text-right">
                        <Button color="default">Edit Teacher</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <CardBody className="bg-secondary">
                  <Form>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <Input
                            className="form-control-alternative"
                            id="input-first-name"
                            placeholder="First Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <Input
                            className="form-control-alternative"
                            id="input-last-name"
                            placeholder="Last Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            placeholder="Email"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <Input
                            className="form-control-alternative"
                            id="input-password"
                            placeholder="Password"
                            type="password"
                            autoComplete="new-password"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="12">
                        <Button color="default">Add new teacher</Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

function mapState(state) {
  const { users } = state;
  return { users };
}

const actionCreators = {
  getAllTeachers: userActions.getAllTeachers
};

const connectedTeachers = connect(
  mapState,
  actionCreators
)(Teachers);
export default connectedTeachers;
