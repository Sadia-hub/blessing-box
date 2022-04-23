import Image from 'next/image';
const { Meta } = Card;
import { Card} from 'antd';
import { ngoCard, margin, imgDiv } from '../../../../styles/customCard';

const NgoCard=({title,src, desc})=>{
    return  <Card
    hoverable
    style={ngoCard}
    cover=
        {<div style={imgDiv}>
            <Image 
            alt={title+ " image"} 
            src={src} 
            width={240} 
            height={200} 

            className={margin.smallMargin}

            />
        </div>
            
        }   
    >
    <Meta
      title={title}
    //   description={desc}
    />
  </Card>
}

export default NgoCard;