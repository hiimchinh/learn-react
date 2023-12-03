export default function Property({ property }) {
  return (
    <div>
      <h2>{property.name}</h2>
      <h3>${property.price} a night</h3>
      <h4>{property.rating} ⭐️</h4>
    </div>
  );
}
