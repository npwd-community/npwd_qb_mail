import App from "./src/App";
import { MailIcon, NotificationIcon } from "./icon";
import { theme } from "./src/app.theme";

interface Settings {
  language: "en";
}

export const path = "/mail";
export default (settings: Settings) => ({
  id: "mail",
  nameLocale: "Mail",
  color: "#fff",
  backgroundColor: "#333",
  path,
  icon: MailIcon,
  app: App,
  notificationIcon: NotificationIcon,
  theme: theme,
});
