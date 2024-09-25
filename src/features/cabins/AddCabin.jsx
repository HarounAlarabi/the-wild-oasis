import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateEditCabinForm from "./CreateEditCabinForm";

function AddCabin() {
  return (
    <Modal>
      <Modal.Open open="cabin-form">
        <Button>Add New Cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateEditCabinForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddCabin;
// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal(!isOpenModal)}>
//         Add New Cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateEditCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

// export default AddCabin;
