// @ts-check

import { error } from 'console';
import i18next from 'i18next';

export default (app) => {
  app
    .get('/users', { name: 'users' }, async (req, reply) => {
      console.log('_________get_users____');
      const users = await app.objection.models.user.query();
      reply.render('users/index', { users });
      return reply;
    })
    .get('/users/new', { name: 'newUser' }, (req, reply) => {
      console.log('_________get_users-new____');
      const user = new app.objection.models.user();
      reply.render('users/new', { user });
    })
    .post('/users', { name: 'create user' }, async (req, reply) => {
      console.log('_________post_users____');
      const user = new app.objection.models.user();
      user.$set(req.body.data);

      try {
        const validUser = await app.objection.models.user.fromJson(req.body.data);
        await app.objection.models.user.query().insert(validUser);
        req.flash('success', i18next.t('flash.users.create.success'));
        reply.redirect(app.reverse('root'));
      } catch ({ data }) {
        req.flash('error', i18next.t('flash.users.create.error'));
        reply.render('users/new', { user, errors: data });
      }

      return reply;
    })
    .get('/users/:id/edit', { name: 'edit' }, async (req, reply) => {
      console.log('_________get_users-id-edit____');
      const id = Number(req.params?.id);
      const cookieId = +req.session.get('id');
      if (!cookieId || (cookieId !== id)) {
        req.flash('error', i18next.t('flash.users.update.unauthorized'));
        return reply.redirect(app.reverse('root'));
      }
      const user = await app.objection.models.user.query().findById(id);
      reply.render('users/edit', { user, errors: {} });
      return reply;
    })
    .patch('/users/:id', { name: 'update user' }, async (req, reply) => {
      console.log('_________patch_users-id____');
      const { data } = req.body;
      const id = req.params?.id;
      try {
        const user = await app.objection.models.user.query().findById(id);
        await user.$query().update(data);
        req.flash('success', i18next.t('flash.users.edit.success'));
        reply.redirect(app.reverse('root'));
      } catch (error) {
        req.flash('error', i18next.t('flash.users.edit.error'));
        reply.render('users/edit', { user: { ...req.body.data, id }, errors: error.data });
      }
    })
    .delete('/users/:id', { name: 'delete user' }, async (req, reply) => {
      console.log('_________delete_users-id____');
      const id = Number(req.params?.id);
      const cookieId = +req.session.get('id');
      if (!cookieId || (cookieId !== id)) {
        req.flash('error', i18next.t('flash.users.delete.error'));
        req.flash('error', i18next.t('flash.users.delete.unauthorized'));
        return reply.redirect(app.reverse('root'));
      }
      try {
        await app.objection.models.user.query().deleteById(id);
        req.flash('success', i18next.t('flash.users.delete.success'));
        req.logOut();
        reply.redirect(app.reverse('users'));
        return reply;
      } catch ({ data }) {
        req.flash('error', i18next.t('flash.users.edit.error'));
        reply.status = 422;
        reply.redirect(app.reverse('users'));
        return reply;
      }
    });
};
