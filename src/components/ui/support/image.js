import Image from "next/image";

export const MyImage=({src,width,height,layout})=>{
    return(<>
    <Image src={src} width={width} height={height} layout={layout}/>
    </>)
}

