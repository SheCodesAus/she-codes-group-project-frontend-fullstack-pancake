import Input from "../Input";

export default function ExperienceLevel({ onChange, currentLevel }) {
  return (
    <Input
      type="select"
      id="experience_level"
      label="Who would be the target audience?"
      defaultValue={currentLevel}
      onChange={onChange}
    >
      <option></option>
      <option value="EL">Entry Level</option>
      <option value="INT">Intermediate</option>
      <option value="ADV">Advanced</option>
      <option value="ALL">ALL</option>
    </Input>
  );
}
