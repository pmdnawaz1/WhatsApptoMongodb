#WhatsApp to MongoDB.

This is a WhatsApp bot which inserts the data into the MongoDB collection from WhatsApp built on Nodejs using `mongoose` and `whatsapp-web.js` npm packages


Usage:- 
- Download the code or clone into repository.
- cd folder.
- npm i
- Check that all the essential packages are installed properly.



## Authors

- [@pmdnawaz1](https://www.github.com/pmdnawaz1)


![Logo](https://icons8.com/icon/AltfLkFSP7XN/whatsapp)


## Functionality.

#### type `Hello` to get started.

```
Hai there! Please type Add name [yourName] Add name [yourAge] Add name [yourGender] to enter data to Database.
```

| Parameter | Type     | Description    |
| :-------- | :------- | :------------------------- |
| `Add name` | `string` | **Required**.  |
| `Add age` | `string` | **Required**.  |
| `Add gender` | `string` | **Required**.  |
| `Save` | `string` | **Required**.  |

#### `Save` command enters data to Database.

```
Your data has been saved successfully to the Database.
```

#### await addDatatoDatabase

Takes two parameters one is spreadsheetId and other is data object to be added.

