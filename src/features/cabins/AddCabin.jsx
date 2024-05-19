// import { useState } from "react";

import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new Cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );
  /* <Modal.Open opens="table">
      <Button>Add new Cabin</Button>
    </Modal.Open>
    <Modal.Window>
      <CreateCabinForm name="table" />
    </Modal.Window> */
}

// function AddCabin() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   return (
//     <>
//       <Button onClick={() => setIsModalOpen((show) => !show)}>Add Form</Button>
//       {isModalOpen && (
//         <Modal onClose={() => setIsModalOpen(false)}>
//           <CreateCabinForm
//             onCloseModal={() => setIsModalOpen(false)}
//           ></CreateCabinForm>
//         </Modal>
//       )}
//     </>
//   );
// }

export default AddCabin;
