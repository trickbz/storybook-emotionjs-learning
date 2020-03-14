import React, { useCallback, useContext } from "react";

// components
import Toggle from "../../../Toggle";
import { AuthenticationContext } from "../../../contexts/AuthenticationContext";

function UserSwitcher() {
  const { authenticated, setAuthenticated } = useContext(AuthenticationContext);

  const handleChange = useCallback(selected => {
    setAuthenticated(!selected);
  }, [setAuthenticated])
  
  return (
    <div>
      <div>Is user authenticated: </div>
      <Toggle onChange={handleChange} value={authenticated} />
    </div>
  )
}

export default UserSwitcher;
