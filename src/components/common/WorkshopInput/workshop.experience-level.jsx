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
      <option>Entry-level</option>
      <option>Intermediate</option>
      <option>Advanced</option>
    </Input>
  );
}
