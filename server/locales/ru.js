// @ts-check

export default {
  translation: {
    appName: 'Fastify Шаблон',
    flash: {
      session: {
        create: {
          success: 'Вы залогинены',
          error: 'Неправильный емейл или пароль',
        },
        delete: {
          success: 'Вы разлогинены',
        },
      },
      users: {
        create: {
          error: 'Не удалось зарегистрировать',
          success: 'Пользователь успешно зарегистрирован',
        },
        edit: {
          error: 'Не удалось отредактировать',
          success: 'Пользователь успешно отредактирован',
        },
      },
      authError: 'Доступ запрещён! Пожалуйста, авторизируйтесь.',
    },
    layouts: {
      application: {
        account: 'Аккаунт',
        users: 'Пользователи',
        signIn: 'Вход',
        edit: 'Редактировать',
        signUp: 'Регистрация',
        signOut: 'Выход',
      },
    },
    views: {
      session: {
        new: {
          signIn: 'Вход',
          submit: 'Войти',
        },
      },
      users: {
        id: 'ID',
        firstName: 'Имя',
        lastName: 'Фамилия',
        email: 'Email',
        createdAt: 'Дата создания',
        update: 'Изменить',
        delete: 'Удалить',
        new: {
          submit: 'Сохранить',
          signUp: 'Регистрация',
        },
        edit: {
          edit: 'Редактировать',
          submit: 'Сохранить',
        },
      },
      welcome: {
        index: {
          hello: 'Привет от Хекслета!',
          description: 'Практические курсы по программированию',
          more: 'Узнать Больше',
        },
      },
    },
  },
};
