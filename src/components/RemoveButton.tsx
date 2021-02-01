import React from "react";

import Button from "./Button";
import { FaTrash } from "react-icons/fa";

type RemoveButtonProps = {
  onClick: () => void;
};

const RemoveButton = ({ onClick }: RemoveButtonProps) => {
  return (
    <div className="mt-1">
      <Button
        text="Remove"
        icon={<FaTrash />}
        className="bg-red-700 hover:bg-red-900 active:bg-red-900"
        onClick={onClick}
      />
    </div>
  );
};

export default RemoveButton;
