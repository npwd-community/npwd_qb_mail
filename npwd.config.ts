import App from "./src/App";
import { MailIcon, NotificationIcon } from "./icon";
import { theme } from "./src/app.theme";

export const externalAppConfig = () => ({
  id: "mail",
  nameLocale: "Mail",
  color: "#fff",
  backgroundColor: "#333",
  path: "/mail",
  icon: MailIcon,
  app: App,
  notificationIcon: NotificationIcon,
  theme: theme,
});

export default externalAppConfig;
