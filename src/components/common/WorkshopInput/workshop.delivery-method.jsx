import Input from "../Input";

export default function DeliveryMethod({ workshopInputDetails, onChange }) {
  const { is_online, is_in_person } = workshopInputDetails;

  const locations = [
    "",
    "Brisbane",
    "Adelaide",
    "Canberra",
    "Darwin",
    "Hobart",
    "Melbourne",
    "Perth",
    "Sydney",
  ];

  const showPhysicalLocationInputField = inPerson => {
    if (inPerson) {
      return (
        <Input
          type="select"
          id="physical_location"
          label="Which city will your workshop be held in?"
          onChange={onChange}
        >
          {locations.map((location, index) => {
            return (
              <option
                kdy={index}
                selected={
                  location === workshopInputDetails.physical_location
                    ? true
                    : false
                }
              >
                {location}
              </option>
            );
          })}
        </Input>
      );
    }
  };

  return (
    <>
      <div className="form-field">
        <label>Delivery Method</label>
        <div>
          <Input
            type="checkbox"
            id="is_online"
            label="Online"
            defaultChecked={is_online ? true : false}
            onChange={onChange}
          />
          <Input
            type="checkbox"
            id="is_in_person"
            label="In person"
            defaultChecked={is_in_person ? true : false}
            onChange={onChange}
          />
        </div>
      </div>

      {showPhysicalLocationInputField(workshopInputDetails.is_in_person)}
    </>
  );
}
