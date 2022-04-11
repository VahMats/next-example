import Image from "next/image";


const SingleBlog = ({ title, image, text, date, id, blogOpening}) => {
    return(
        <div className="col-span-full md:col-span-3 lg:col-span-6">
            <Image layout="responsive" width={1} height={0.5} objectFit="cover" src={image.src} alt={image.alt} onClick={e=>{blogOpening(id);}}/>
            <p>{title}</p>
            <p>{date}</p>
            <span>{text}</span>
        </div>
    );
}


export default SingleBlog;