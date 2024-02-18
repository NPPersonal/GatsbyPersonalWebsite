import * as React from "react";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Popover,
  Typography,
} from "@mui/material";
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
      <Box className="flex flex-row justify-center items-center">
        <IconButton onClick={handleClick}>
          <TranslateIcon />
        </IconButton>
        <Typography>{languageMapper[language]}</Typography>
      </Box>
      <Popover
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
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
      </Popover>
    </Box>
  );
};

export default LanguageSwitcher;
