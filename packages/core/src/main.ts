import Button from './button/button';
import '../../../style.css';

const button = new Button('contained', 'square', 'pink', 600).render();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
    ${button}
  </div>
`;
