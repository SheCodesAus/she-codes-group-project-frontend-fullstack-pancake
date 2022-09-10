export const createWorkshopFormInputFields = [
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
  {
    type: "checkbox",
    id: "is_online",
    label: "Tick the box if the workshop will be online",
  },
  {
    type: "checkbox",
    id: "is_in_person",
    label: "Tick the box if the workshop will be in person",
  },
];
