import React from 'react';
import {mount, shallow} from 'enzyme';

import Counter from "./Counter";

describe('Counter', () => {

    it('displays initial value', () => {
        const component = shallow((
            <Counter initialValue={123}/>
        ));

        expect(component.find('h2').text()).toEqual('123');
    });

    it('disables - when value=0', () => {
        const component = mount((
            <Counter initialValue={1}/>
        ));

        expect(component.find('.decrement').prop('disabled')).toEqual(false);

        component.find('.decrement').simulate('click');

        expect(component.find('.decrement').prop('disabled')).toEqual(true);
    });

    it('updates label after clicking -', () => {
        const component = mount((
            <Counter initialValue={1}/>
        ));
        expect(component.find('h2').text()).toEqual('1');

        component.find('.decrement').simulate('click');

        expect(component.find('h2').text()).toEqual('0');
    });

    it('updates label after clicking +', () => {
        const component = mount((
            <Counter initialValue={1}/>
        ));

        expect(component.find('h2').text()).toEqual('1');

        component.find('.increment').simulate('click');

        expect(component.find('h2').text()).toEqual('2');
    });

    it('disables + when value=10', () => {
        const component = mount((
            <Counter initialValue={9}/>
        ));

        expect(component.find('.increment').prop('disabled')).toEqual(false);

        component.find('.increment').simulate('click');

        expect(component.find('.increment').prop('disabled')).toEqual(true);
    });

});