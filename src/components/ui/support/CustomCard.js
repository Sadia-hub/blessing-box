import { Card } from 'antd';
import Image from 'next/image';
const { Meta } = Card;
import { cardStyle, image } from '../../../../styles/customCard';


const CustomCard=({title, donation, src, alt})=>{
    return <Card   
    hoverable
    bordered={true}
    style={cardStyle}
    cover={<Image 
      alt={alt} 
      src={src} 
      width={235} 
      height={200} 
      style={image}/>}
  >
    <Meta title={title} description={`${donation} Rupees Donated`} />
  </Card>
}

export default CustomCard;