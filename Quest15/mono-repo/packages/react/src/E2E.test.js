import React from "react"
import { render } from "@testing-library/react"
import App from "./App"
import request from 'supertest';
import server from '/Users/changhyunkim/Desktop/DevOpsCurriculum/Quest09/server/server';



describe("<App />", () => {
  it ('Backend Testing', (done) => {
    request(server).get('/api').then((response) => {

      // Check JSON "username" : "changhyun"
      expect(response.text).toBe("{\"username\":\"changhyun\"}");
      done();
    });
  });

  it ("Fronted Testing", () => {
    const { getByText } = render(<App />)
    
    // HTTP Header Cheack "Hello World"
    const header = getByText("Hello World")
    expect(header).toBeInTheDocument('해당 페이지에서 Hello World를 찾을 수 없습니다.');
  });

  it('Test click event', () => {
    const wrapper = mount(<App />);
    expect(wrapper.state('num')).toEqual(0)
    wrapper.find('button').simulate('click');
    expect(wrapper.state('num')).toEqual(1);
  });
});