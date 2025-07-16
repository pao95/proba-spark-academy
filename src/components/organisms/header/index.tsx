import { Bell, Search, User, Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import { HeaderProps } from "./types";
import { headerStyles } from "./styles";
import { Button, Input, Icon, Text, Avatar } from "@/components/atoms";

export const Header = ({ onMenuToggle, isMobile }: HeaderProps) => {
  const { t } = useTranslation();

  return (
    <header className={headerStyles.base}>
      <div className={headerStyles.container}>
        <div className={headerStyles.leftSection}>
          {isMobile && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onMenuToggle}
              className={headerStyles.menuButton}
            >
              <Icon icon={Menu} size={20} />
            </Button>
          )}
          <Text variant="h4" className={headerStyles.title}>
            {t("header.title")}
          </Text>
        </div>

        <div className={headerStyles.rightSection}>
          <div className={headerStyles.searchContainer}>
            <Icon icon={Search} className={headerStyles.searchIcon} />
            <Input
              type="search"
              placeholder={t("header.searchPlaceholder")}
              className={headerStyles.searchInput}
            />
          </div>

          <Button
            variant="ghost"
            size="sm"
            className={headerStyles.notificationButton}
          >
            <Icon icon={Bell} size={20} />
            <span className={headerStyles.notificationDot}></span>
          </Button>

          <div className={headerStyles.userSection}>
            <Avatar className={headerStyles.userAvatar} fallbackIcon={User} />

            <Text size="sm" className={headerStyles.userName}>
              {t("general.student")}
            </Text>
          </div>
        </div>
      </div>
    </header>
  );
};
