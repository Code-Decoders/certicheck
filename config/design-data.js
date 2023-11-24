import React from "react";
const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "NAME", uid: "name", sortable: true},
  {name: "CREATED AT", uid: "createdAt", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

const designs = [
  {
    id: 1,
    name: "Tony Reichert",
    createdAt: "22/2/2023"
  },
  {
    id: 2,
    name: "Zoey Lang",
    createdAt: "22/8/2023"
  },
  {
    id: 3,
    name: "John Cena",
    createdAt: "23/11/2023"
  },
];

export {columns, designs};
