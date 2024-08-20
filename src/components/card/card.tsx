import { useFoodDataDelete } from "../../hooks/useFoodDataDelete";
import "./card.css"

interface CardProps {
  id?: string;
  price: number
  title: string
  image: string
}

export function Card({ id, price, title, image }: CardProps) {

  const { mutate: deleteProduct } = useFoodDataDelete();

  const handleDelete = () => {
    if (id) { 
        // Check if id is defined
        deleteProduct(id);
      }
  
  };


  return (
    <div className="card">
      <img src={image} alt="Pizza" />
      <h2>{title}</h2>
      <p>
        <b>Value: {price}</b>
      </p>
      <button className="btn-delete" onClick={handleDelete}>Delete Product</button>
    </div>
  )
}
