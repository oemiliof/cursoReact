import react from "react";
import "@testing-library/jest-dom";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

// const jest.mock('../../hooks/useFetchGifs')

describe("pruebas en el hook useFetchGifs", () => {
  test("debe de retornar el estado inicial", async () => {
    const category = "One Punch";
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );

    const { data, loading } = result.current;

    console.log(result);

    console.log(data, loading);

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test("debe de retornar un arreglo de imgs y el loading en false", async () => {
    const category = "One Punch";
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );

    await waitForNextUpdate();
    const { data, loading } = result.current;

    console.log(result);

    console.log(data, loading);

    expect(data.length).toBe(10);
    expect(loading).toBeFalsy();
  });
});
