/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useEffect } from "react";
import { connect } from "react-redux";

// actions
import { fetchPublicRepositories } from "../../../actions/github/githubActions";

// components
import Page from "../../Page";

function HomePage(props) {
  const {
    fetchPublicRepositories
  } = props;
  
  useEffect(() => {
    fetchPublicRepositories('trickbz');
  }, [fetchPublicRepositories]);
  
  return (
    <div>
      <Page title="Home page">
        Welcome to homepage? Nothing interesting here.
        <br /><br />
      </Page>
    </div>
  );
}

export default connect(null, { fetchPublicRepositories })(HomePage);
