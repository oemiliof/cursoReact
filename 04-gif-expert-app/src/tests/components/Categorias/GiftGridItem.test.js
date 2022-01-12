import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import GifGridItem from "../../../components/Categorias/GifGridItem";

describe("Pruebas en <GiftGtidItem />", () => {
  const title = "Titulo";
  const url = "https://google.com";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("debe de mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de tener un parrafo con el title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("debe de tener la imagen igual al url y alt de los props", async () => {
    const img = wrapper.find("img");
    expect(img.props().src).toBe(url);
    expect(img.props().alt).toBe(title);
  });

  test("debe de tener animate__fadeIn", async () => {
    const div = wrapper.find("div");

    expect(div.props().className).toContain("animate__fadeIn");
    expect(div.props().className.includes("animate__fadeIn")).toBe(true);
    expect(div.props().className.includes("animate__fadeIn")).not.toBe(false);
    // expect()
  });
});
