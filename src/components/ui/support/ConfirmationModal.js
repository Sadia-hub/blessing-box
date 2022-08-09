import { Button, Modal, Space } from 'antd';
import React, { createContext } from 'react';




function ConfirmationModal({modal, contextHolder}) {
    const [modal, contextHolder] = Modal.useModal();
    return (
     
        <Space>
          <Button
            onClick={() => {
                modal.confirm(config);
            }}
          >
            Confirm
          </Button>
          {contextHolder}
         
        </Space>
       
    );
}

export default ConfirmationModal