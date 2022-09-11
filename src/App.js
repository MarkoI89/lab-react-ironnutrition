import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [searchResults, setSearchResults] = useState(foods);
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    calories: '',
    servings: '',
  });

  return (
    <div className="App">
      <AddFoodForm
        formData={formData}
        setFormData={setFormData}
        foodList={foodList}
        setFoodList={setFoodList}
      />
      <Search foodList={foodList} setFoodList={setFoodList} />
      <Divider>Food List</Divider>
      <div className="foodListContainer">
        {foodList.map((food) => {
          return (
            <FoodBox
              key={food.name}
              food={food}
              foodList={foodList}
              setFoodList={setFoodList}
            />
          );
        })}
      </div>
    </div>
  );
}
export default App;
