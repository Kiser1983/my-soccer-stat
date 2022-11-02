const Filter = (query, list) => {
  if (!query) {
    return list;
  } else {
    return list.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.area.name.toLowerCase().includes(query.toLowerCase())
    );
  }
};
export default Filter;
