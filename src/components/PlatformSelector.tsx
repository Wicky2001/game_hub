import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import usePlatform from "../hooks/usePlatform";

function PlatformSelector() {
  const { platforms, errorMsg } = usePlatform();
  if (errorMsg) {
    return null;
  }
  return (
    <Box marginBottom={2}>
      <Menu>
        <MenuButton as={Button} rightIcon={<FaChevronDown />}>
          Platform
        </MenuButton>
        <MenuList>
          {platforms.map((platform) => (
            <MenuItem>{platform.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}

export default PlatformSelector;
