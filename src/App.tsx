import React from "react";
import styled from "@emotion/styled";
import { IPhoneSettings } from "@project-error/npwd-types";
import { i18n } from "i18next";
import { Theme, StyledEngineProvider, ThemeProvider } from "@mui/material";
import { RecoilEnv, RecoilRoot } from "recoil";
import Header from "./components/Header";
import SnackbarProvider from "./snackbar/SnackbarProvider";
import { theme } from "./app.theme";
import MailModal from "./components/MailModal";
import MailList from "./components/MailList";
import { NuiProvider } from "fivem-nui-react-lib";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

const Container = styled.div<{ isDarkMode: any }>`
  flex: 1;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  overflow: auto;
  max-height: 100%;
  background-color: #fafafa;
  ${({ isDarkMode }) =>
    isDarkMode &&
    `
    background-color: #212121;
  `}
`;
interface AppProps {
  theme: Theme;
  i18n: i18n;
  settings: IPhoneSettings;
}

const App = (props: AppProps) => {
  const isDarkMode = true;

  return (
    <StyledEngineProvider injectFirst>
      <SnackbarProvider>
        <Container isDarkMode={isDarkMode}>
          <Header />
          <MailModal />
          <MailList isDarkMode={true} />
        </Container>
      </SnackbarProvider>
    </StyledEngineProvider>
  );
};

export default function WithProviders(props: AppProps) {
  return (
    <RecoilRoot override key="npwd_qb_mail">
      <NuiProvider resource="npwd_qb_mail">
        <App {...props} />
      </NuiProvider>
    </RecoilRoot>
  );
}
