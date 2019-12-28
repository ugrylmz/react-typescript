import * as React from "react";

function CustomDate() {
  let [date, setDate] = React.useState("");

  let getDate = () => {
    setDate(new Date().toDateString());
  };
  return (
    <div>
      <button onClick={getDate}> Get the Date</button>
      {date}
    </div>
  );
}

export { CustomDate };
