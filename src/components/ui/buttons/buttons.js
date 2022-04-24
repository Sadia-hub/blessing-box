
import {Button} from 'antd'; 
export const CustomButton = ({label, className, type, onClick, disabled,shape}) => {
    return (
      <>
        <Button type = {type} className = {className} onClick={onClick} disabled = {disabled} shape={shape}>{label}</Button>
      </>
    );
  };