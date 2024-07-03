import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

export interface orderItem {
  value: string;
  label: string;
}

interface sortSelectorProps {
  onSelectOrder: (orderItem: orderItem | null) => void;
  selectedSortOrderItem: orderItem | null;
}

function SortSelector({
  onSelectOrder,
  selectedSortOrderItem,
}: sortSelectorProps) {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  return (
    <Box>
      <Menu>
        <MenuButton as={Button} rightIcon={<FaChevronDown />}>
          {selectedSortOrderItem
            ? "OrderBy: " + selectedSortOrderItem.label
            : "OrderBy: Relavance"}
        </MenuButton>
        <MenuList>
          {sortOrders.map((orderItem) => (
            <MenuItem
              key={orderItem.value}
              value={orderItem.value}
              onClick={() => {
                onSelectOrder(orderItem);
              }}
            >
              {orderItem.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}

export default SortSelector;
