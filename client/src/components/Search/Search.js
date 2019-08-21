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
      <Menu style={{ backgroundColor: "#a9f1d0" }}>
        <Menu.Item>
          <Menu.Header as="h1">Get Rich Slowly</Menu.Header>
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
                <Form.Button type="submit" primary>
                  Search
                </Form.Button>
              </Form.Group>
              <p style={{ textAlign: "left", color: "grey" }}>
                Ex: AAPL,&nbsp;MSFT,&nbsp;COST,&nbsp;SBUX,&nbsp;KO,&nbsp;T
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
