import { Card } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
const { Meta } = Card;
import { cardStyle, image, anchor } from '../../../../styles/CustomAdminCard';


const CustomAdminCard=({title, src, alt, width, height})=>{
    return <Card   
    hoverable
    bordered={true}
    style={cardStyle}
    cover={<Image 
      alt={alt} 
      src={src} 
      width={width} 
      height={height} 
      style={image}/>}
  >
    <div>
      <h4  style={{color:"white"}}>{title}</h4>  
    </div>
    
  </Card>
}

export default CustomAdminCard;