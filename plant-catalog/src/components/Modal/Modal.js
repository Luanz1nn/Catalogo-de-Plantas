import "./style.css";

export default function Modal({ isoOpen, setOpenModal, name }) {
  if (isoOpen) {
    return(
        <div className="modal-background">
            <div className="modal-container">
                <div className="modal">
                    <div className="close-btn-container">
                     <button className="close-btn" onClick={()=> setOpenModal(false)}></button>    
                    </div>
                    <div className='section-modal'>
                      <h1>{name}</h1>
                      
                    </div>
                </div>                
            </div>
        </div>
    )
  }
  return null
}
