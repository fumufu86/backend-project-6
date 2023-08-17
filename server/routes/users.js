// @ts-check

import { error } from 'console';
import i18next from 'i18next';

export default (app) => {
  app
    .get('/users', { name: 'users' }, async (req, reply) => {
      const users = await app.objection.models.user.query();
      reply.render('users/index', { users });
      return reply;
    })
    .get('/users/new', { name: 'newUser' }, (req, reply) => {
      const user = new app.objection.models.user();
      reply.render('users/new', { user });
    })
    .post('/users', async (req, reply) => {
      const user = new app.objection.models.user();
      user.$set(req.body.data);

      try {
        const validUser = await app.objection.models.user.fromJson(req.body.data);
        // const testUser = {
        //   firstName: 'Alex',
        //   lastName: 'Miralle',
        //   email: 'mail@gmail.com',
        //   passwordDigest: 'fdd21bff77c73f9c0f41be4be07271f3adb201f3f17c385c6374f2b25e2e0f58',
        // };
        // console.log('------------------------------------');
        // console.log(validUser);
        // console.log('------------------------------------');
        await app.objection.models.user.query().insert(validUser);
        // console.log(result);
        req.flash('info', i18next.t('flash.users.create.success'));
        reply.redirect(app.reverse('root'));
      } catch ({ data }) {
        // console.log('------------------------------------');
        // console.log(JSON.parse(JSON.stringify(data)));
        // console.log('------------------------------------');
        req.flash('error', i18next.t('flash.users.create.error'));
        reply.render('users/new', { user, errors: data });
      }

      return reply;
    })
    .get('/users/:id/edit', { name: 'edit' }, async (req, reply) => {
      const id = +req.params?.id;
      // console.log('---------------------------');
      // console.log(id);
      // // console.log(req);
      // console.log(req.session);
      // console.log(req.session.get('id'));
      // console.log(req.session.passport.id)
      // // console.log(req.session.passport.get('id'));
      // console.log('---------------------------');
      // // const cookieId = +req.session.get('id');
      const cookieId = +req.session.passport.id;
      if (!cookieId || (cookieId !== id)) {
        req.flash('error', i18next.t('flash.users.update.unauthorized'));
        return reply.redirect(app.reverse('root'));
      }
      const user = await app.objection.models.user.query().findById(id);
      // console.log(user);
      reply.render('users/edit', { user, errors: {} });
      return reply;
    })
    .patch('/users/:id', { name: 'update user' }, async (req, reply) => {
      console.log('111111111111111111111111111111');
      const { data } = req.body;
      const id = req.params?.id;
      // // user.$set(req.body.data);
      // console.log('---------------------------');
      // console.log(req.body.data);
      // console.log(data);
      // console.log('---------------------------');
      // console.log(app.objection.models.user)
      // console.log('---------------------------');
      try {
        // console.log('12121212121212121212121212121');
        // console.log(req.body.data)
        // const validUser = await app.objection.models.user.fromJson(req.body.data);
        const user = await app.objection.models.user.query().findById(id);
        // console.log(validUser);
        // console.log('123123123123123123123123123123');
        // console.log(user);
        // console.log('123123123123123123123123123123');
        // console.log(`13131313${JSON.stringify(await app.objection.models.user.query())}`)
        await user.$query().update(data);
        // console.log('222222222222222222222222222');
        // console.log(result);
        // console.log('333333333333333333333333333');
        // console.log(app.objection.models.user)
        req.flash('info', i18next.t('flash.users.edit.success'));
        reply.redirect(app.reverse('root'));
      } catch ({ data }) {
        // console.log('444444444444444444444444444');
        // console.log(user);
        // console.log('555555555555555555555555555');
        // console.log(data);
        // console.log('66666666666666666666666666666');
        req.flash('error', i18next.t('flash.users.edit.error'));
        // console.log('77777777777777777777777777777777');
        reply.render('users/edit', { user: { ...req.body.data, id }, errors: data });
        // console.log('8888888888888888888888888888888');
      }
    })
    .delete('/users/:id', { name: 'delete user' }, async (req, reply) => {
      console.log('111111111111111111111111111111');
      const id = +req.params?.id;
      console.log(id);
      console.log('---------------------------');
      try {
        await app.objection.models.user.query().deleteById(id);
        console.log('222222222222222222222222222');
        req.flash('info', i18next.t('flash.users.delete.success'));
        reply.redirect(app.reverse('root'));
      } catch ({ data }) {
        console.log('333333333333333333333333333');
        req.flash('error', i18next.t('flash.users.edit.error'));
        reply.status = 422;
        reply.redirect(app.reverse('users'));
        return reply;
      }
    });
};
