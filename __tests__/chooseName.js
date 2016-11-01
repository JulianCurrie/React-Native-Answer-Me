import 'react-native';
import React from 'react';
import ChooseName from '../src/components/auth/chooseName';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <ChooseName />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
