import { useState } from "react"
import "./App.css"
import { Card } from "./components/card/card"
import { useFoodData } from "./hooks/useFoodData"
import { CreateModal } from "./components/create-modal/create-modal"
// import { FoodData } from "./interface/FoodData";

function App() {
  const { data } = useFoodData()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev);
  }
  return (
    <>
      <div className="container">
        <h1>Menu</h1>
        <div className="card-grid">
          {/* Use the interrogation notation to indicate that it may be undefined. */}
          {data?.map((foodData) => (
            <Card
              key={foodData.id}
              id={foodData.id}
              price={foodData.price}
              title={foodData.title}
              image={foodData.image}
            />
          ))}
        </div>
          {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
          <button className="btn-new" onClick={handleOpenModal}>new</button>
      </div>
    </>
  )
}

export default App
