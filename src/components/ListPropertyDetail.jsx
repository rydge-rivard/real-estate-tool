export function ListItemPropDetail({ propertyDetails }) {
  propertyDetails = { price: "200000", sqft: "900", repairs: "24000" };

  return (
    <ul>
      <li>Price: ${propertyDetails.price}</li>
      <li>Square Footage: {propertyDetails.sqft}</li>
      <li>Repairs: {propertyDetails.repairs}</li>
    </ul>
  );
}
