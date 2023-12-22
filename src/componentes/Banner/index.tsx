import './Banner.css'

interface BannerProps {
    srcImage: string
    altImage: string
}

export const Banner = ({srcImage, altImage}: BannerProps) => {
    // TSX
    return (
        <header className="banner">
            <img src={srcImage} alt={altImage}/>
        </header>
    )
}

export default Banner;