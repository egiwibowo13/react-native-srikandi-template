import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

configure({adapter: new Adapter()});

// jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
