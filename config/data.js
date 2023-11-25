import React from "react";
const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "NAME", uid: "name", sortable: true},
  {name: "AADHAR", uid: "aadhar", sortable: true},
  {name: "EMAIL", uid: "email", sortable: true},
  {name: "PHONE", uid: "phone", sortable: true},
  {name: "TYPE", uid: "type", sortable: true},
  {name: "ISSUED AT", uid: "created_at", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

const statusOptions = [
  {name: "Domicle", uid: "success"},
  {name: "Caste", uid: "danger"},
  {name: "Non-creamy", uid: ""},
];

export {columns, statusOptions};
