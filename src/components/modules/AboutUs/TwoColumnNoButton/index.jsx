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
        <div
          className={`image-overlay  ${
            heading === "Meet our Founder: Ashleigh Wilson!" ? "no-overlay" : ""
          }`}
        ></div>
        <img src={image} alt={heading} />
      </div>
    </div>
  );
}
