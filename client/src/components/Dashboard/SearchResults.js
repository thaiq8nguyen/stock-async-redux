import React from "react";
import {
  Button,
  Card,
  Grid,
  Header,
  Icon,
  List,
  Message
} from "semantic-ui-react";
import { connect } from "react-redux";

const SearchResults = props => {
  return (
    <Card fluid>
      <Card.Content textAlign="left">Search Results</Card.Content>
      <Card.Content>
        {props.results.length > 0 ? (
          <List>
            {props.results.map((company, index) => (
              <List.Item key={index}>
                <Grid columns="3">
                  <Grid.Row verticalAlign="middle">
                    <Grid.Column>
                      <Header as="h4">
                        $ {company.amount} {company.currency}
                      </Header>
                    </Grid.Column>
                    <Grid.Column>
                      <Header as="h4">Paid {company.frequency} </Header>
                    </Grid.Column>
                    <Grid.Column textAlign="right">
                      <Button size="small">Watch</Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </List.Item>
            ))}
          </List>
        ) : (
          <Message negative visible>
            No company found
          </Message>
        )}
      </Card.Content>
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    results: state.searchResults
  };
};
export default connect(
  mapStateToProps,
  {}
)(SearchResults);
