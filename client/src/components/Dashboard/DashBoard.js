import React from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import SearchResults from "./SearchResults";
import WatchList from "../WatchList/WatchList";
const DashBoard = props => {
  return (
    <Grid container columns="2" padded="vertically">
      <Grid.Column>
        {props.searchResults.length > 0 && <SearchResults />}
      </Grid.Column>

      <Grid.Column>
        <WatchList />
      </Grid.Column>
    </Grid>
  );
};
const mapStateToProps = state => ({
  searchResults: state.searchResults,
  watchList: state.watchList
});
export default connect(
  mapStateToProps,
  {}
)(DashBoard);
