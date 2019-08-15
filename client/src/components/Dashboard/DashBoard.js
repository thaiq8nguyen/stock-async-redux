import React from "react";
import { Grid } from "semantic-ui-react";
import SearchResults from "./SearchResults";
const DashBoard = () => {
  return (
    <Grid container columns="3" padded="vertically">
      <Grid.Column>
        <SearchResults />
      </Grid.Column>
    </Grid>
  );
};

export default DashBoard;
