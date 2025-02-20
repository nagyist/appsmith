import React from "react";
import UserWelcomeScreen from "./UserWelcomeScreen";
import { requiresUnauth } from "pages/UserAuth/requiresAuthHOC";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getCurrentUser } from "selectors/usersSelectors";
import { AUTH_LOGIN_URL } from "constants/routes";
import { Redirect } from "react-router";

const StyledSetupContainer = styled.div`
  background-color: ${(props) => props.theme.colors.homepageBackground};
  height: 100vh;
  overflow: hidden;
`;

function Setup() {
  const user = useSelector(getCurrentUser);

  if (!user?.emptyInstance) {
    return <Redirect to={AUTH_LOGIN_URL} />;
  }

  return (
    <StyledSetupContainer>
      <UserWelcomeScreen isSuperUser />
    </StyledSetupContainer>
  );
}

export default requiresUnauth(Setup);
