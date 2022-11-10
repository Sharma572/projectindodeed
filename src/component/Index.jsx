import Carousel from "react-elastic-carousel";
import { data } from "../CarsData";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import './slider.css'

const breakPoints = [
  {
    width: 1,
    itemsToShow: 1,
    itemsToScroll: 1,
    pagination: true,
    showArrows: false,
  },
  {
    width: 550,
    itemsToShow: 2,
    itemsToScroll: 2,
    showArrows: false,
    pagination: false,
  },
  { width: 768, itemsToShow: 4, pagination: false },
];

function Index() {
    // console.log(data);
  return (
    <>
      <div className="lg:mt-40 mt:10 sm:mx-0 lg:mx-10">
        <Carousel
          itemsToScroll={3}
          breakPoints={breakPoints}
          infiniteLoop={false}
        >
          {data.map((item, index) => (
            <div className="h-96" key={index}>
              <div>
                <p className="text-gray-700 text-lg">{item.bodyType}</p>
                <div>
                  <div className="my-3">
                    <strong className="text-xl">{item.modelName}</strong>
                    <span className="ml-2 text-gray-500 text-lg">
                      {item.modelType}
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <img
                  className="hover:scale-105 transition-all duration-500 cursor-pointer"
                  src={item.imageUrl}
                  alt={index}
                  width="305px"
                />
              </div>

              <div className="flex justify-around mt-4 text-blue-600 font-meduim">
                <h4 className="flex">
                  <span className="hover:text-blue-900 hover:font-semibold transition-all duration-500 ">
                    <Link to={`/learn/${item.id}`}>LEARN</Link>
                  </span>
                  <AiOutlineRight className="mt-1 mr-3 sm:mr-0" />
                </h4>
                <h4 className="hover:text-blue-900 hover:font-semibold transition-all duration-500 flex">
                  <a
                    href="https://www.volvocars.com/in/cars/xc40-electric/"
                    target="_blank"
                  >
                    SHOP
                  </a>
                  <AiOutlineRight className="mt-1 mr-2" />
                </h4>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default Index;
