import Input from "../../common/Input";

export default function ExeprienceLevel({ onChange }) {
  return (
    <Input
      type="select"
      id="experience_level"
      label="Who would be the target audience?"
      onChange={onChange}
    >
      <option>Entry-level</option>
      <option>Intermediate</option>
      <option>Advanced</option>
    </Input>
  );
}
