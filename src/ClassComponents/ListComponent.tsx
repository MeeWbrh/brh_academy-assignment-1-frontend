import React from 'react';
import list from 'App';

type ItemProp = {
  item: {
    id: number;
    firstname: string;
    lastname: string;
    year: number;
  };
};

const ListItem: React.FC<ItemProp> = ({ item }) => {
  return (
    <tr>
      <th> {item.id} </th>
      <th>{item.firstname}</th>
      <th>{item.lastname}</th>
      <th>{item.year}</th>
    </tr>
  );
};

export default ListItem;
