import React from "react";
import Button from "react-bootstrap/Button";

function UpdatePage() {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <>
      <Button variant={"success"} className="mt-4 p-2" onClick={handleClick}>
        Обновить данные
      </Button>
    </>
  );
}

export default UpdatePage;