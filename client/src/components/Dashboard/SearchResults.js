import React, { useState } from "react";
import {
  Button,
  Card,
  Grid,
  Header,
  Icon,
  Input,
  List,
  Message
} from "semantic-ui-react";
import { connect } from "react-redux";
import { addStockToWatchList, removeSearchResults } from "../../actions";

const SearchResults = props => {
  const [shares, setShares] = useState(0);
  const handleSharesChange = event => {
    setShares(event.target.value);
  };
  return (
    <Card fluid>
      <Card.Content textAlign="left">Search Results</Card.Content>
      <Card.Content>
        <List>
          {props.results.map((dividend, index) => (
            <List.Item key={index}>
              <Grid columns="4">
                <Grid.Row verticalAlign="middle">
                  <Grid.Column>
                    <Header as="h4">
                      $ {dividend.amount} {dividend.currency}
                    </Header>
                  </Grid.Column>
                  <Grid.Column>
                    <Header as="h4">Paid {dividend.frequency} </Header>
                  </Grid.Column>
                  <Grid.Column>
                    <Input
                      name="shares"
                      onChange={handleSharesChange}
                      placeholder="# of shares"
                      size="mini"
                      type="number"
                      value={shares}
                    />
                  </Grid.Column>
                  <Grid.Column textAlign="right">
                    <Button
                      primary
                      size="small"
                      onClick={() =>
                        props.addStockToWatchList({
                          symbol: props.stockSymbol.toUpperCase(),
                          shares: shares,
                          dividendPaid: dividend.amount,
                          paidFrequency: dividend.frequency
                        })
                      }
                    >
                      Watch
                    </Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Message info header={dividend.description} />
            </List.Item>
          ))}
        </List>
      </Card.Content>
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    results: state.searchResults,
    responseMessage: state.responseMessage,
    stockSymbol: state.searchQuery
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addStockToWatchList: stock => {
      dispatch(addStockToWatchList(stock));
      dispatch(removeSearchResults());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
