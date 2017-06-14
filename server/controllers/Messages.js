const Messages = require('../models').Messages;

module.exports = {
  //insert data on the row
  create(req, res) {
    return Messages
      .create({
        title: req.body.title,
        body: req.body.body,
      })
      .then(messages => res.status(201).send(messages))
      .catch(error => res.status(400).send(error));
  },//list all data
  list(req, res) {
  return Messages
    .all()
    .then(messages => res.status(200).send(messages))
    .catch(error => res.status(400).send(error));
},//get data using ID
  retrieve(req, res) {
  return Messages
    .findById(req.params.messagesID)
    .then(messages => {
      if (!messages) {
        return res.status(404).send({
          message: 'Todo Not Found',
        });
      }
      return res.status(200).send(messages);
    })
    .catch(error => res.status(400).send(error));
},//edit
  update(req, res) {
  return Messages
    .findById(req.params.messagesID)
    .then(messages => {
      if (!messages) {
        return res.status(404).send({
          message: 'Messages Not Found',
        });
      }
      return messages //Messages is different than messages..case sensitive
        .update({
          title: req.body.title || messages.title,
          body: req.body.body || messages.body,
        })
        .then(() => res.status(200).send(messages))
          // Send back the updated message.
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
},
//delete
destroy(req, res) {
  return Messages
    .findById(req.params.messagesID)
    .then(messages => {
      if (!messages) {
        return res.status(400).send({
          message: 'Messages Not Found',
        });
      }
      return messages
        .destroy()
        .then(() => res.status(200).send({message: 'Message deleted succesfully!'}))
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
},



};