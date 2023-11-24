import React from "react";
const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "NAME", uid: "name", sortable: true},
  {name: "AGE", uid: "age", sortable: true},
  {name: "TYPE", uid: "type", sortable: true},
  {name: "EMAIL", uid: "email"},
  {name: "ACTIONS", uid: "actions"},
];

const statusOptions = [
  {name: "Domicle", uid: "success"},
  {name: "Caste", uid: "danger"},
  {name: "Non-creamy", uid: ""},
];

const users = [
  {
    id: 1,
    name: "Tony Reichert",
    type: "Domicle",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    type: "Caste",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    type: "Non-Creamy",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
  }
];

export {columns, users, statusOptions};
