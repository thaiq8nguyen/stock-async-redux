import React from "react";
import { Form, Menu } from "semantic-ui-react";
import { connect } from "react-redux";
import { setSearchQuery, searchStockSymbol } from "../../actions";

const Search = props => {
  const submitForm = event => {
    event.preventDefault();
    props.handleSearchSubmit(props.query);
  };

  return (
    <div>
      <Menu>
        <Menu.Item>
          <Menu.Header as="h3">Stock Client</Menu.Header>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Form onSubmit={submitForm}>
              <Form.Group>
                <Form.Input
                  icon="search"
                  name="query"
                  onChange={props.handleSearchQueryChange}
                  placeholder="Stock Symbol"
                  type="text"
                  value={props.query}
                />
                <Form.Button type="submit">Search</Form.Button>
              </Form.Group>
              <p style={{ textAlign: "left", color: "grey" }}>
                Ex: AAPL,&nbsp;VZ,&nbsp;WMT,&nbsp;SBUX
              </p>
            </Form>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

const mapStateToProps = state => ({
  query: state.searchQuery
});

const mapDispatchToProps = dispatch => {
  return {
    handleSearchSubmit: query => {
      dispatch(searchStockSymbol(query));
    },

    handleSearchQueryChange: event => {
      dispatch(setSearchQuery(event.target.value));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
