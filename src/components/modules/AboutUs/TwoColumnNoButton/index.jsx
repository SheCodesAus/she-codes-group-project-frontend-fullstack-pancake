export default function TwoColumnNoButton({
  heading,
  paragraph,
  image,
  direction,
}) {
  return (
    <div
      className={`columnContainer ${direction === "reverse" ? "reverse" : ""}`}
    >
      <div className="columnText">
        <h2>{heading}</h2>
        <p>{paragraph}</p>
      </div>
      <div className="columnImage">
        <img src={image} alt={heading} />
      </div>
    </div>
  );
}
