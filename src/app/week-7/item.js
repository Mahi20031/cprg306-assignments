export default function Item({ item, onSelect }) {
  return (
    <ul
      
      onClick={() => onSelect(item)}
    >
      <li className="text-4xl font-bold">{item.name}</li>
      <li className="text-sm ">Category: {item.category}</li>
      <li className="text-sm ">Quantity: {item.quantity}</li>
    </ul>
  );
}