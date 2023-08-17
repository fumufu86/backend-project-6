// @ts-check

// import i18next from 'i18next';

// export default (app) => {
//   app
//     .get('/users/:id/edit', { name: 'edit' }, async (req, reply) => {
//       const id = +req.params?.id;
//       console.log('---------------------------');
//       console.log(id);
//       console.log(req);
//       console.log('---------------------------');
//       const cookieId = +req.session.get('id');
//       if (!cookieId || (cookieId !== id)) {
//         req.flash('error', i18next.t('flash.users.update.unauthorized'));
//         return reply.redirect(app.reverse('root'));
//       }
//       const user = await app.objection.models.user.query().findById(id);
//       reply.render('users/new', { user, errors: {} });
//       return reply;
//     })
//     // .post('/users/:id', async (req, reply) => {
//     //   const user = new app.objection.models.user();
//     //   user.$set(req.body.data);
// // 
//     //   try {
//     //     const validUser = await app.objection.models.user.fromJson(req.body.data);
//     //     const result = await app.objection.models.user.query().insert(validUser);
//     //     console.log(result);
//     //     req.flash('info', i18next.t('flash.users.edit.success'));
//     //     reply.redirect(app.reverse('root'));
//     //   } catch ({ data }) {
//     //     req.flash('error', i18next.t('flash.users.create.error'));
//     //     reply.render('users/new', { user, errors: data });
//     //   }
// // 
//     //   return reply;
//     // });
// };
