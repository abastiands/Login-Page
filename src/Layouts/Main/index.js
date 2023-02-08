import MainLeft from "../../Components/Section/MainLeft";
import MainRight from "../../Components/Section/MainRight";

const Main = () => {
    return (
        <div className="Main w-11/12 md:w-4/6 h-[90%] md:h-5/6  max-w-[936px] lg:max-h-[468px] grid grid-cols-2">
            <MainLeft />
            <MainRight />
        </div>
    );
};

export default Main;
