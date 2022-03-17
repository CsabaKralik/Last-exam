const Header = (props) => {
  const handleSort = () => {
    if (props.sorting == null) {
      props.setSorting(true);
      console.log(props.sorting);
      return;
    }
    console.log(props.sorting);
    {
      props.sorting ? props.setSorting(false) : props.setSorting(true);
    }
    console.log(props.sorting);
    return;
  };

  return (
    <div>
      <button onClick={handleSort}>Sort</button>
      <input
        placeholder="Search Here"
        onChange={(e) => {
          props.setSearchValue(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default Header;
