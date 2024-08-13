import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import {Container, Modal, ModalContent} from "./styles";

export function TrailerButton({ trailerKey }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <Container>
      <div>
        <button onClick={handleOpenModal} className="trailerShow">
          Assista ao trailer <FaPlay />
        </button>
      </div>

      {isOpen && (
        <Modal onClick={handleCloseModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${trailerKey}?hl=pt_BR&cc_lang_pref=pt&cc_load_policy=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button onClick={handleCloseModal}>Fechar</button>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
}
