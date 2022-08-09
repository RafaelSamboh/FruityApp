import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export default function Carrinho() {
  const [itemCount, setItemCount] = React.useState(0);
  return (
    <div style={{ display: "block", padding: 30 }}>
      <div>
        <Badge color="secondary" badgeContent={itemCount}>
          <LocalGroceryStoreOutlinedIcon />
        </Badge>
        <ButtonGroup>
          <Button
            onClick={() => {
              setItemCount(Math.max(itemCount - 1, 0));
            }}
          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              setItemCount(itemCount + 1);
            }}
          >
            <AddIcon fontSize="small" />{" "}
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
