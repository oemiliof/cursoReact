import react from "react";
import "@testing-library/jest-dom";
import GifGrid from "../../../components/Categorias/GifGrid";
import { shallow } from "enzyme";
import { useFetchGifs } from "../../../hooks/useFetchGifs";

jest.mock("../../../hooks/useFetchGifs");

describe("Pruebas en el  <GifGrid/>", () => {
  const category = "One punch";
  // let wrapper = shallow(<GifGrid category={category} />);

  // beforeEach(() => {
  //   jest.clearAllMocks();
  //   wrapper = shallow(<GifGrid category={category} />);
  // });

  test("debe de mostrar correctamente", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar items cuando se carga imagenes con el useFetch", () => {
    const gifs = [
      {
        id: "abc",
        url: "https://google.com",
        title: "Cualquier cosa",
      },
      {
        id: "abc",
        url: "https://google.com",
        title: "Cualquier cosa",
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);

    // expect(wrapper).toMatchSnapshot();

    expect(wrapper.find("p").exists()).toBe(false);

    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
