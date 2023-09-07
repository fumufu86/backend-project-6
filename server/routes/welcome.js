// @ts-check

export default (app) => {
  app
    .get('/', { name: 'root' }, (req, reply) => {
      console.log('_________get_root____');
      // console.log(req);
      reply.render('welcome/index');
    })
    .get('/protected', { name: 'protected', preValidation: app.authenticate }, (req, reply) => {
      reply.render('welcome/index');
    });
};
