import "jest-preset-angular/setup-jest";
import "jest-localstorage-mock";

Object.defineProperty(window, "getComputedStyle", {
	value: () => ["-webkit-appearance"]
});
