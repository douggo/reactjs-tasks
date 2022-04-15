import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={openModal}>Delete</button>
      </div>
      {isModalOpen && <Modal onCancel={closeModal} onConfirm={closeModal}/>}
      {isModalOpen && <Backdrop onClick={closeModal}/>} 
    </div>
  );
}

export default Todo;