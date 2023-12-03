import Property from "./Property";

export default function PropertyList({ properties }) {
  return (
    <ul style={{ display: "flex", justifyContent: "space-around" }}>
      {properties.map((property) => (
        <Property key={property.id} property={property} />
      ))}
    </ul>
  );
}
