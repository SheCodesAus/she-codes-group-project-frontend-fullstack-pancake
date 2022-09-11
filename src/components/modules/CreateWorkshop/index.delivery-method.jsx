import Input from "../../common/Input";

export default function DeliveryMethod({ workshopInputDetails, onChange }) {
  const createWorkshopDeliveryMethodsFields = [
    {
      type: "checkbox",
      id: "is_online",
      label: "Online",
    },
    {
      type: "checkbox",
      id: "is_in_person",
      label: "In person",
    },
  ];

  return (
    <>
      <div className="form-field">
        <label>Delivery Method</label>
        <div>
          {createWorkshopDeliveryMethodsFields.map((method, index) => {
            const { type, id, label } = method;
            return (
              <Input
                key={index}
                type={type}
                id={id}
                label={label}
                onChange={onChange}
              />
            );
          })}
        </div>
      </div>
      {workshopInputDetails.is_in_person ? (
        <Input
          type="select"
          id="physical_location"
          label="Which city will your workshop be held in?"
          onChange={onChange}
        >
          <option>Brisbane</option>
          <option>Adelaide</option>
          <option>Canberra</option>
          <option>Darwin</option>
          <option>Hobart</option>
          <option>Melbourne</option>
          <option>Perth</option>
          <option>Sydney</option>
        </Input>
      ) : (
        ""
      )}
    </>
  );
}
