import type { DescriptionProps } from "@/interfaces/Description.types"

const Description:React.FC<DescriptionProps> = ({
    description,
    className
})=>{
    return (
        <>
            <p className={className}>{description}</p>
        </>
    )
}

export default Description;