import "../css/MyModal.css";

type MyModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

function MyModal({ isOpen, onClose, children }: MyModalProps) {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default MyModal;
