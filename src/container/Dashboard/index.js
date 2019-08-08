import React, { Component } from "react";
import {
  Navbar,
  Nav,
  InputGroup,
  Row,
  Col,
  Card,
  ListGroup
} from "react-bootstrap";
import { bindActionCreators } from "redux";
import User from "../../components/user-card";
import { connect } from "react-redux";
import {
  fetchPeople,
  fetchMovies,
  fetchNavData
} from "../../actions/dashboard-actions";
import { dashboardApi } from "../../api/dashboard-api";
import SideBar from "../../components/user-card";

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.props.fetchPeople(dashboardApi.people);
    this.props.fetchMovies(dashboardApi.movies);
    this.props.fetchNavData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.movies !== this.props.movies) {
      this.setState(prev => ({ isLoading: !prev.isLoading }));
    }
  }

  handleNavigation = item => {
    this.props.history.push(item.path);
  };

  enableNavigation = i => {
    const { navBarData } = this.state;
    navBarData[i].enable = !navBarData[i].enable;
    this.setState(() => ({ navBarData }));
  };

  render() {
    const { movies, navbar } = this.props;
    const { isLoading } = this.state;
    const loadingSpinner = (
      <div className="d-flex m-auto spinner-border" role="status">
        <span className="sr-only" />
      </div>
    );

    return (
      <div>
        {/* <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} /> */}
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>Poc For Widgets</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {navbar.map(
                (item, i) =>
                  item.enable && (
                    <Nav.Link
                      key={i}
                      onClick={() => this.handleNavigation(item)}
                    >
                      {item.title}
                    </Nav.Link>
                  )
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Card
          className="mx-auto mt-4 text-center p-5"
          style={{ maxWidth: "300px", minHeight: "250px" }}
        >
          {isLoading ? (
            loadingSpinner
          ) : (
            <ListGroup>
              {movies &&
                movies.results &&
                movies.results.map((item, i) => (
                  <ListGroup.Item key={i}>{item.title}</ListGroup.Item>
                ))}
            </ListGroup>
          )}
        </Card>

        {/* <Row>
          {navbar.map((item, i) => (
            <Col>
              <InputGroup key={i}>
                <InputGroup.Prepend>
                  <InputGroup.Checkbox
                    onClick={() => this.enableNavigation(i)}
                    checked={item.enable}
                  />
                </InputGroup.Prepend>
                <InputGroup.Append>{item.title}</InputGroup.Append>
              </InputGroup>
            </Col>
          ))}
        </Row> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    people: state.dashboard.people,
    movies: state.dashboard.movies,
    navbar: state.dashboard.navbar,
    data: state
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { fetchPeople, fetchMovies, fetchNavData },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoard);
