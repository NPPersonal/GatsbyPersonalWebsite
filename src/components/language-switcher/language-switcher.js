import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import TranslateIcon from "@mui/icons-material/Translate";
import { useI18next } from "gatsby-plugin-react-i18next";
import languageMapper from "../../../locales/language-mapper.json";

const LanguageSwitcher = () => {
  const { languages, language, changeLanguage } = useI18next();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((state) => !state);
  };
  const handleClose = () => {
    setOpen((state) => !state);
  };
  const handleLanguageClick = (languageCode) => {
    setOpen((state) => !state);
    changeLanguage(languageCode);
  };

  return (
    <Box>
      <Box
        className="flex flex-row justify-center items-center cursor-pointer"
        onClick={handleClick}
      >
        <IconButton aria-label="switch-language">
          <TranslateIcon />
        </IconButton>
        <Typography>{languageMapper[language]}</Typography>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock={true}
        disableAutoFocus={true}
        disablePortal={true}
      >
        {languages.map((langCode, i) => {
          const langName = languageMapper[langCode];
          return (
            <MenuItem
              key={`${langCode}-${i}`}
              onClick={() => handleLanguageClick(langCode)}
            >
              <Typography>{langName}</Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};

export default LanguageSwitcher;
