import React from 'react';
import {Carousel} from 'react-responsive-carousel'

const Carousel1 = () => {
    return (
        <div>
          <Carousel autoPlay={true} axis={'horizontal'} showArrows={true}>
                <div>
                    <img src="/media/gg-linux/Elements/workspace/IEI-Website/IEI-Website-frontend-changes/IEI-Website/public/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="public/1.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="public/2.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="public/3.jpeg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="public/4.jpeg" />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="assets/6.jpeg" />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>  
        </div>
    );
};

export default Carousel1;