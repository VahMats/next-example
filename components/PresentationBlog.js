import Image from "next/image";

const PresentetionBlog = ({ title, image, text, date, id, blogOpening }) => {
    return(
        <div className="col-span-full">
            <div className="cursor-pointer" onClick={e=>{blogOpening(id)}}>
                <Image layout="responsive" width={1} height={0.5} objectFit="cover" src={image.src} alt={image.alt} />
            </div>
            <div className="grid grid-cols-2">
                <span>
                    <p>{title}</p>
                    <p>{date}</p>
                </span>
                {text}
            </div>
        </div>
    );
}


export default PresentetionBlog;
