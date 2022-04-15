function Modal(props) {

  function onClickCancel() {
    console.log('You clicked on cancel');
    props.onCancel();
  }

  function onClickConfirm() {
    console.log('You clicked on confirm');
    props.onConfirm();
  }

  return(
    <div className="modal">
      <p>Are you sure about that?</p>
      <button onClick={onClickCancel}>Cancel</button>
      <button onClick={onClickConfirm}>Confirm</button>
    </div>
  );
}

export default Modal;