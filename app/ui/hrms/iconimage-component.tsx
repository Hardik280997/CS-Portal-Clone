import Image from "next/image";

const IconImageComponent = ({ defaultSrc, altName }: { defaultSrc: string, altName: string }) => {

    // const [imageSrc, setImageSrc] = useState(`${defaultSrc}-wc`)
    return (
        <Image src={`/Images/${defaultSrc}.svg`} height={25} width={25} alt={`${altName}-icon`} />
    );
}

export default IconImageComponent;