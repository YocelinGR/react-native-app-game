import React from "react";
import { shallow } from "enzyme";

import TreeGame from "../plantillaTree";

describe("<TreeGame />", () => {
  let mockData = [
    { name: "test" },
    { name: "test" }
  ];

  /*it("should render children when supplied the items prop", () => {
    let wrapper = shallow(<TestComponent items={mockData}/>);

    let items = wrapper.findWhere((component) => {
      return component.props().children === "test";
    });

    expect(items.length).to.equal(2);
  });*/

  it("should point to the _click function in onPress", () => {
    global.alert = sinon.spy();

    let wrapper = shallow(<TreeGame items={mockData}/>);

    wrapper.simulate('press');

    expect(wrapper.props().onPress.name).to.contain('bound _click');

    describe("<TreeGame/> : _click()", () => {
      it("should trigger an alert if onPress is executed", () => {
        expect(global.alert.calledOnce).to.equal(true);
      });
    });
  });
});