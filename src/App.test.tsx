import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import {axe, toHaveNoViolations} from 'jest-axe';

import App from "./App"

expect.extend(toHaveNoViolations);

test('test', async () => {
  const {container} = render(
    <App />
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
