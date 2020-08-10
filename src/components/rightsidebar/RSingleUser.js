import React from "react";
import { Link } from "react-router-dom";
import "../../css/RSingleUser.css";

export default function RSingleUser({ userR }) {
  const { _id, first_name, last_name } = userR;
  return (
    <div key={_id} className="rs-susr">
      <Link
        key={_id}
        to={`/profile/${_id}`}
      >{`${first_name}_${last_name}`}</Link>
    </div>
  );
}
