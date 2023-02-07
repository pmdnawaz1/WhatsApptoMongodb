const { Client } = require('whatsapp-web.js');
const mongodb = require('mongodb');

const client = new Client();
const userData = {};

client.initialize();

client.once('qr', (qr) => {
  console.log("Please scan the QR code to log in.");
  console.log(qr);
});

client.on('authenticated', (session) => {
  console.log("Authenticated Successfully.");
});

const addDataToDB = async (data) => {

  const MongoClient = mongodb.MongoClient;
  const uri = "mongodb+srv://xxx:xxx@cluster0.vbrmysz.mongodb.net/?retryWrites=true&w=majority";//paste your uri
  const client = new MongoClient(uri, { useNewUrlParser: true });
  await client.connect();
  const db = client.db("test");
  const collection = db.collection("data");
  await collection.insertOne(data);
  await client.close();
};

client.on('message', async (message) => {
  const { from, body } = message;

  if (!userData[from]) {
    userData[from] = {};
  }

  if (body === 'Hello') {
    client.sendMessage(from, 'Hello there! To add data, send "Add name [your name]", "Add age [your age]", or "Add gender [your gender]". To save your data, send "Save".');
  } else if (body.startsWith('Add name')) {
    const name = body.split(' ')[2];
    userData[from].Name = name;
    client.sendMessage(from, `Name "${name}" added successfully!`);
  } else if (body.startsWith('Add age')) {
    const age = body.split(' ')[2];
    userData[from].Age = age;
    client.sendMessage(from, `Age "${age}" added successfully!`);
  } else if (body.startsWith('Add gender')) {
    const gender = body.split(' ')[2];
    userData[from].Gender = gender;
    client.sendMessage(from, `Gender "${gender}" added successfully!`);
  } else if (body === 'Save') {
    await addDataToDB({
      Name: userData[from].Name,
      Age: userData[from].Age,
      Gender: userData[from].Gender
    });
    client.sendMessage(from, 'Data saved successfully!');
    delete userData[from];
  }
});
