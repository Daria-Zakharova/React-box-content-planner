import { FaEdit, FaWindowClose } from "react-icons/fa";
import { ControlBtn, Controls } from "./ContactItemControls.styled";

export const ContactItemControls = ({id, onUpdate, onDelete, isUpdated, isDeleted}) => (
    <Controls>
        <ControlBtn className="update-btn" type="button" id={id} onClick={onUpdate} disabled={isDeleted || isUpdated }><FaEdit size={20}/></ControlBtn>
        <ControlBtn className="close-btn" type="button" id={id} onClick={onDelete} disabled={isDeleted}><FaWindowClose color="red" size={20}/></ControlBtn>
    </Controls>
)