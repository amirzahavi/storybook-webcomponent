
import {html} from 'lit-element';
import Button, { TAG_NAME } from "../lib/button";

describe(TAG_NAME, () => {
  it('should have click event', async () => {
    //Arrange
    const clickSpy = jest.fn();
    const btn = new Button();
    btn.addEventListener('click', clickSpy);
    //Act
    btn.click();
    //Assert
    expect(clickSpy).toHaveBeenCalledTimes(1);
  });

  it('should reflect slot', async () => {
    const rendered = html`<trax-button><span>test</span></trax-button>`;
    expect(rendered.getHTML()).toMatchSnapshot();
  });
});
