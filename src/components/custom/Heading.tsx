import type { HeadingProps } from "@/interfaces/Heading.types"
const Heading: React.FC<HeadingProps> = ({
    title,
    className,
}) => {
    return (
        <>
            <h1 className={className}>{title}</h1>
        </>
    )
};

export default Heading;