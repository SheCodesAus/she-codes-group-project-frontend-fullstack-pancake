import Input from "../Input";

export default function ExeprienceLevel({ onChange, currentLevel }) {
  return (
    <Input
      type="select"
      id="experience_level"
      label="Who would be the target audience?"
      onChange={onChange}
    >
      <option></option>
      <option selected={currentLevel === "Entry-level" ? true : false}>
        Entry-level
      </option>
      <option selected={currentLevel === "Intermediate" ? true : false}>
        Intermediate
      </option>
      <option selected={currentLevel === "Advanced" ? true : false}>
        Advanced
      </option>
    </Input>
  );
}
