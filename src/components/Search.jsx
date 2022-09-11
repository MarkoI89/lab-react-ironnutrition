
import { Divider, Input } from 'antd';
import foods from '../foods.json';

function Search(props) {
  return (
    <>
      <Divider>Search</Divider>

      <div className="searchBar">
        <label>Search</label>
        <Input value={undefined} type="text" onChange={(event) => {
          props.setFoodList(foods);
          if (event.target.value !== ""){
            const searchResults = foods.filter(food => food.name.toLowerCase().includes(event.target.value));
            props.setFoodList(searchResults);
          }
        }} />
      </div>
    </>
  );
}

export default Search;