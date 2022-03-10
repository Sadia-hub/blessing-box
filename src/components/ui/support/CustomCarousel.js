import { Carousel} from 'antd';
import Image from 'next/image';

const contentStyle = {
  height: '160px',
  color: '#364d79',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const CustomCarousel = () => {

  return (
    <>
      <Carousel dotPosition="right" autoplay={true}>
        <div>
          <Image 
          height={500}
          width={1200}
          src="/c1.svg"
          className={contentStyle}></Image>
        </div>
        <div>
        <Image 
          height={500}
          width={1200}
          src="/c2.svg"
          className={contentStyle}></Image>
        </div>
        <div>
        <Image 
          height={500}
          width={1200}
          src="/c3.svg"
          className={contentStyle}></Image>
        </div>
        <div>
        <Image 
          height={500}
          width={1200}
          src="/c4.svg"
          className={contentStyle}></Image>
        </div>
      </Carousel>
    </>
  );
};

export default CustomCarousel;