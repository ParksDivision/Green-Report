import Login from '../login/index.vue'
import { mount, shallowMount, Wrapper } from '@vue/test-utils'
import * as firebase from 'firebase/app';
import 'firebase/auth';


let wrapper: Wrapper<any>;

// Mounts the Vue component with mock stub components
beforeEach(() => {
  wrapper = shallowMount(Login, {
    stubs: {
      'nuxt-link': true,
    },
  });
});


// Destroys each wrapper instance after tests run
afterEach(() => { 
  wrapper.destroy();
});


// Mocks firebase app with methods and user credentials
jest.mock('firebase/app', () => {
  const userCredentialMock = {
    user: {
      sendEmailVerification: jest.fn()
    }
  }
  return {
    auth: jest.fn().mockReturnThis(),
    currentUser: {
      email: 'Kyle@Kyle.com',
      uid: 123,
      emailVerified: true,
    },
    signInWithEmailAndPassword: jest.fn().mockResolvedValue('/'),
    createUserWithEmailAndPassword: jest.fn(() => userCredentialMock),
    sendPasswordResetEmail: jest.fn(),
    signOut: jest.fn(),
    onAuthStateChanged: jest.fn(),
    initializeApp: jest.fn()
  }
});


describe.only('Login Page', () => {
  it('Is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it('Successfully calls the login handler', async () => {
    (wrapper.vm as any).pressed = jest.fn();
    await wrapper.find("[data-email]").setValue("Kyle@Parks.com")
    await wrapper.find("[data-password]").setValue("password")
    await wrapper.find('form').trigger('submit.prevent');
    
    expect((wrapper.vm as any).pressed).toBeCalled();
  });

  it('Correctly passes user input to component', async () => {
    (wrapper.vm as any).pressed = jest.fn();
    await wrapper.find("[data-email]").setValue("Kyle@Parks.com")
    await wrapper.find("[data-password]").setValue("password")
    await wrapper.find('form').trigger('submit.prevent');

    expect(wrapper.vm.$data.email).toMatch('Kyle@Parks.com');
    expect(wrapper.vm.$data.password).toMatch('password');
    expect(wrapper.vm.$data.error).toMatch('');
  });
});
