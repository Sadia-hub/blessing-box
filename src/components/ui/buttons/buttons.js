
import {Button} from 'antd'; 
export const CustomButton = ({label, className, type, onClick, disabled,shape, htmlType}) => {
    return (
      <>
        <Button htmlType={htmlType} type = {type} className = {className} onClick={onClick} disabled = {disabled} shape={shape}> {label}</Button>
      </>
    );
  };