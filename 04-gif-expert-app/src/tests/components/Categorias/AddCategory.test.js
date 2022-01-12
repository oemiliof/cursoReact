import react from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import AddCategory from "../../../components/Categorias/AddCategory";

describe("Pruebas en el componente AddCategory", () => {
  const setCategories = jest.fn();
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("debe de mostrarse correctamente", async () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola mundo";

    input.simulate("change", { target: { value } });

    expect(wrapper.find("input").props().value).toBe(value);
  });

  test("No debe de postear la info con submit", () => {
    // wrapper.find("form").simulate("submit", { preventDefault: () => {} });
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("Debe de llamar el setCategories y limpiar la caja de texto", () => {
    // 1. simular el inputChange
    const input = wrapper.find("input");
    const value = "this is a test";
    input.simulate("change", { target: { value } });
    expect(wrapper.find("input").props().value).toBe(value);

    // 2. simular el submit

    const form = wrapper.find("form");
    form.simulate("submit", { preventDefault() {} });

    // 3. SetCategories se debe de haber llamado
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    // 4. el valor de input debe ser ''
    const inputAfterSubmit = wrapper.find("input");

    expect(inputAfterSubmit.props().value == "").toBe(true);
    expect(inputAfterSubmit.prop("value")).toBe("");
  });
});
