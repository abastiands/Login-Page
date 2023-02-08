import image from '../../../Assets/Images/worker.png';

const MainRight = () => {
    return (
        <div className="MainRight w-full h-full flex justify-center items-center bg-gray-200 rounded-r-xl">
            <div className="imgWrapper w-2/4">
                <img className='max-w-full max-h-full' src={image} alt="Worker Img" />
            </div>
        </div>
    )
}

export default MainRight