import React from "react";

const Card1 = ({feature}) => {
    if(feature.flag){
        return (
            <div className=" md:h-[420px] flex flex-col justify-between ">
                <h2 className="text-6xl">{feature.title}</h2>
                <p className="text-md mt-3 text-gray-600">{feature.subtitle}</p>
            </div>
        )
    }else{
        return (
            <div className="relative h-[420px] overflow-hidden shadow-lg p-5">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${feature.imgURL})` }}
              ></div>
        
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#032C1E] to-transparent"></div>
        
              {/* Content */}
              <div className="absolute bottom-15 right-10 text-right text-white pl-5">
                <h2 className="text-xl">{feature.title}</h2>
                <p className="text-md mt-3 text-gray-200">{feature.subtitle}</p>
              </div>
            </div>
          );
    }
  
};

export default Card1;