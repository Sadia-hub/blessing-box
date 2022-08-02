
import {Button} from 'antd'; 
export const CustomButton = ({label, className, type, onClick=()=>{}, disabled,shape,htmlType}) => {
    return (
      <>
        <Button type = {type} className = {className} onClick={onClick} disabled = {disabled} shape={shape} htmlType={htmlType}>{label}</Button>
      </>
    );
  };