import React from 'react';
import { MapOutline } from "react-ionicons";


function index() {
    return (
        
        <div class="bg-linear-pink-invert py-12 px-4 bg-blue-50">
            <div tabIndex="0" aria-label="footer" class="focus:outline-none mx-auto container flex flex-col items-center justify-center">
                <div className="text-xl " tabIndex="0" aria-label="prodify logo" role="img">
                    <MapOutline
                        color={'#500eec'} 
                        height="50px"
                        width="50px"
                    />
                </div>
                <div class="text-black flex flex-col md:text-center f-f-l pt-2">
                    <div class="md:flex items-center mt-5 md:mt-10 text-base text-color f-f-l">
                        <h2  class="text-center text-lg font-bold md:mr-6 pb-4 md:py-0 cursor-pointer"><a  class="focus:outline-none focus:underline hover:text-gray-700" href="javascript:void(0)">Download Now</a> </h2>
                        <h2  class="text-center text-lg font-bold cursor-pointer"><a class="focus:outline-none focus:underline hover:text-gray-700" href="javascript:void(0)">License</a> </h2>
                    </div>
                    <br />
                    <div class="text-sm text-color mb-10 f-f-l">
                        <p tabIndex="0" class="focus:outline-none">© 2021 Sarvesh. All rights reserved</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default index;
