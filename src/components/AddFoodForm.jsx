import { Divider, Input } from 'antd';

function AddFoodForm(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.setFoodList([...props.foodList, props.formData]);
  };
  return (
    <form className="addFoodForm" onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={undefined}
        type="text"
        onChange={(event) => {
          props.setFormData({ ...props.formData, name: event.target.value });
        }}
      />

      <label>Image</label>
      <Input
        value={undefined}
        type="text"
        onChange={(event) => {
          props.setFormData({ ...props.formData, image: event.target.value });
        }}
      />

      <label>Calories</label>
      <Input
        value={undefined}
        type="number"
        onChange={(event) => {
          props.setFormData({
            ...props.formData,
            calories: event.target.value,
          });
        }}
      />

      <label>Servings</label>
      <Input
        value={undefined}
        type="number"
        onChange={(event) => {
          props.setFormData({
            ...props.formData,
            servings: event.target.value,
          });
        }}
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
