/** @jsx jsx */
import { useContext } from "react";
import { jsx } from "@emotion/core";

// context
import { AuthenticationContext } from "../../../contexts/AuthenticationContext";

// styles
import * as s from "./AuthProtectedBox.styles";

function AuthProtectedBox() {
  const { authenticated } = useContext(AuthenticationContext);

  const renderContent = () => {
    return authenticated
      ? 'This is content visible to authenticated users only'
      : 'You must be authenticated to see this content';
  }

  return (
    <div css={s.container}>
      {renderContent()}
    </div>
  )
}

export default AuthProtectedBox;