import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button, Card, Header, Grid, List, Progress } from "semantic-ui-react";
const WatchList = props => {
  const [totalIncome, setTotalIncome] = useState(0);
  const [goalPercent, setGoalPercent] = useState(0);

  useEffect(() => {
    const total = props.watchList.reduce((sum, stock) => {
      return sum + stock.shares * stock.dividendPaid;
    }, 0);
    setTotalIncome(total.toFixed(2));
  }, [props.watchList]);

  useEffect(() => {
    setGoalPercent((totalIncome / props.incomeGoal) * 100);
  }, [totalIncome, props.incomeGoal]);

  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>Watch List</Card.Header>
        <br />

        <Grid columns={2}>
          <Grid.Row verticalAlign="middle">
            <Grid.Column width={13}>
              <Progress color="teal" percent={goalPercent} />
            </Grid.Column>
            <Grid.Column textAlign="right" width={3}>
              <Header as="h5" style={{ color: "#69E5AE" }}>
                Goal $ {props.incomeGoal}
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
      <Card.Content>
        <List>
          {props.watchList.length > 0 &&
            props.watchList.map((dividend, index) => (
              <List.Item key={index}>
                <Grid columns={4}>
                  <Grid.Row verticalAlign="middle">
                    <Grid.Column>{dividend.symbol}</Grid.Column>
                    <Grid.Column>{dividend.shares} shares</Grid.Column>
                    <Grid.Column>$ {dividend.dividendPaid}/share</Grid.Column>
                    <Grid.Column>
                      <strong>
                        Est. Quarterly Income: $
                        {(dividend.shares * dividend.dividendPaid).toFixed(2)}
                      </strong>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </List.Item>
            ))}
        </List>
      </Card.Content>
      <Card.Content>
        <Grid columns={2}>
          <Grid.Row verticalAlign="bottom">
            <Grid.Column textAlign="left">
              <Header as="h3">Estimate Total Income</Header>
            </Grid.Column>
            <Grid.Column textAlign="right">
              <Header as="h2">$ &nbsp;{totalIncome}</Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
    </Card>
  );
};
const mapStateToProps = state => {
  return {
    watchList: state.watchList,
    incomeGoal: state.incomeGoal
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchList);
