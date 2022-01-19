import {
  CloudDownloadOutline,
  ImagesOutline,
  ColorPaletteOutline,
} from "react-ionicons";

function index() {
  return (
    <div className="mr-10 ml-10">
        <p className="text-3xl text-primary-normal font-bold text-center mt-4">Features</p>
      <div class="mt-4 mb-4 p-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="text-center">
          <CloudDownloadOutline
            height="50px"
            width="50px"
            className="inline-block align-middle"
            color={'#500eec'} 
          />
          <p className="text-lg">Quick Download</p>
          <p>
            Set up in 5 minutes by submitting your website information. We
            handle dynamically and automatically the rest for you.
          </p>
        </div>
        <div className="text-center">
          <ImagesOutline
            height="50px"
            width="50px"
            className="inline-block align-middle"
            color={'#500eec'} 
          />
          <p className="text-lg">High Resolution</p>
          <p>
            Share eye-catching high resolution visuals on social media. Optimize
            and boost your potential customer with ease.
          </p>
        </div>
        <div className="text-center">
          <ColorPaletteOutline
            height="50px"
            width="50px"
            className="inline-block align-middle"
            color={'#500eec'} 
          />
          <p className="text-lg">Customize Feature</p>
          <p>
            Choose your background color among 50+ templates and preview the
            generated images before adding into your website.
          </p>
        </div>
      </div>
    </div>
  );
}

export default index;
