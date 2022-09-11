import Input from "../Input";

export default function TextInputs({
  workshopInputDetails,
  onChange,
  formType,
}) {
  const textInputFields = [
    {
      type: "text",
      id: "title",
      label: "Title",
      placeholder: "Enter the title of your workshop ...",
    },
    {
      type: "textarea",
      id: "description",
      label: "Description",
      placeholder: "Provide details of your workshop ...",
    },
    {
      type: "text",
      id: "workshop_link",
      label: "Workshop Link",
      placeholder: "Please provide a link to your workshop ...",
    },
    {
      type: "text",
      id: "image",
      label: "Provide an image link for your workshop",
      placeholder: "Image Link ...",
    },
    {
      type: "date",
      id: "date_and_time",
      label: "Pick a date",
    },
  ];

  return textInputFields.map((field, index) => {
    const { type, id, label, placeholder } = field;
    if (formType === "create") {
      return (
        <Input
          key={index}
          type={type}
          id={id}
          label={label}
          placeholder={placeholder}
          onChange={onChange}
        />
      );
    }
    if (formType === "update") {
      return (
        <Input
          key={index}
          type={type}
          id={id}
          label={label}
          defaultValue={
            id === "date_and_time"
              ? new Date(workshopInputDetails[id]).toISOString().split("T")[0]
              : workshopInputDetails[id]
          }
          onChange={onChange}
        />
      );
    }
  });
}
