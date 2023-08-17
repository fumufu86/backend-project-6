// @ts-check

export default {
  translation: {
    appName: 'Fastify Boilerplate',
    flash: {
      session: {
        create: {
          success: 'You are logged in',
          error: 'Wrong email or password',
        },
        delete: {
          success: 'You are logged out',
        },
      },
      users: {
        create: {
          error: 'Failed to register',
          success: 'User registered successfully',
        },
        edit: {
          error: 'Failed to edit',
          success: 'User edited successfully',
        },
      },
      authError: 'Access denied! Please login',
    },
    layouts: {
      application: {
        account: 'Account',
        users: 'Users',
        signIn: 'Login',
        signUp: 'Register',
        edit: 'Edit',
        signOut: 'Logout',
      },
    },
    views: {
      session: {
        new: {
          signIn: 'Login',
          submit: 'Login',
        },
      },
      users: {
        id: 'ID',
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'Email',
        createdAt: 'Created at',
        update: 'Edit',
        delete: 'Delete',
        new: {
          submit: 'Register',
          signUp: 'Register',
        },
        edit: {
          edit: 'Edit',
          submit: 'Save',
        },
      },
      welcome: {
        index: {
          hello: 'Hello from Hexlet!',
          description: 'Online programming school',
          more: 'Learn more',
        },
      },
    },
  },
};
