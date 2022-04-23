import Image from "next/Image";

export const MyImage=({src,width,height,layout})=>{
    return(<>
    <Image src={src} width={width} height={height} layout={layout}/>
    </>)
}

