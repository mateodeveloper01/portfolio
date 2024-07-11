import { FaSortDown } from "react-icons/fa";
import { useData } from "../hooks/useData";
// import { BsGithub } from "react-icons/bs";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ItemProyects } from "../components/proyects/ItemProyects";
import { Drop } from "../components";

export const Home = () => {
  const { proyects } = useData();

  const sliderSettings: Settings = {
    infinite: true,
    dots: true,
    autoplay: true, // Activar reproducción automática
    autoplaySpeed: 3000, // Velocidad de reproducción automática en milisegundos (ejemplo: 3000 ms = 3 segundos)
    arrows: false, // Mostrar flechas de navegación
    className: "w-11/12 h-auto ",
  };

  return (
    <>
      <section className="gap-5 items-center justify-around min-h-screen lg:min-h-[90vh] w-full flex">
        <Drop className="flex flex-col gap-4 p-2 text-center lg:p-0 lg:text-start">
          <h1 className="text-4xl lg:text-5xl  font-semibold">Hola!</h1>
          <h2 className="w-full text-5xl lg:text-6xl font font-semibold  text-black">
            Soy Mateo Pedehontaa
          </h2>
          <p className="p-1 text-3xl lg:text-4xl  font-semibold">
            FullStack Developer
            <img />
          </p>
        </Drop>
        <Drop className="w-[33%] flex items-center max-md:hidden ">
          <Slider {...sliderSettings}>
            {proyects.map(({ img }) => (
              // <div className="w-full bg-1 flex flex-col   overflow-hidden">
              <div className="max-h-[300px] w-auto relative rounded-lg text-black hover:text-blue-600 ">
                <img className="w-full h-full object-cover " src={img} alt="" />
              </div>

              // </div>
            ))}
          </Slider>
        </Drop>
      </section>
      <div className=" w-full flex justify-center max-lg:hidden ">
        <a href="#section-sobreMi" className="start-button text-white ">
          <FaSortDown />
        </a>
      </div>
    </>
  );
};
