# Ideos Documentation

Record flashes of your ideas at anytime.

---

### Specificiation: REST

---

## Table of Contents

- [Ideos Documentation](#ideos-documentation) - [Specificiation: REST](#specificiation-rest)
  - [Table of Contents](#table-of-contents)
  - [Idea](#idea)
    - [Data Structure](#data-structure)
    - [Example](#example)
    - [Routes](#routes)
      - [Get All Ideas](#get-all-ideas)

---

## Idea

### Data Structure

```js
{
  _id: String,
  created: Date,
  title: String,
  description: String,
  author: User
}
```

### Example

```js
{
  _id: "629dd413f6cb9d22e09588a3",
  created: "2022-09-18T11:41:58.265Z",
  title: "Create Ideos Daily Cron",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula lectus, aliquet non dolor in, dictum placerat lacus.",
  author: { UserObject }
}
```

---

### **Get Ideas List**

Gets the idea list.

### Endpoint

```
GET /api/ideas
```

### Parameters

- `page` **Required**  
  Type: `Number`  
  Default: 1  
  Current page. Each request will return 10 items by default.

### Returns

A list of ideas that contains 10 items per request.

### Response Example

```js
{
  page: 1,
  length: 10,
  total: 54,
  data: [
    {
      _id: "629dd413f6cb9d22e09588a3",
      created: "2022-09-18T11:41:58.265Z",
      title: "Create Ideos Daily Cron",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula lectus, aliquet non dolor in, dictum placerat lacus.",
      author: { UserObject }
    },
    // More idea data...
  ]
}
```

### **Get Ideas Details**

Gets the selected idea's details.

### Endpoint

```
GET /api/ideas/:id
```

### Parameters

_No parameter._

### Returns

A detailed data of the selected idea.

### Response Example

```js
{
  _id: "629dd413f6cb9d22e09588a3",
  created: "2022-09-18T11:41:58.265Z",
  title: "Create Ideos Daily Cron",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula lectus, aliquet non dolor in, dictum placerat lacus.",
  author: { UserObject }
}
```

### **Update Idea**

Update the title and/or description of an idea

### Endpoint

```
POST /api/ideas/:id
```

### Parameters

_No parameters._

### Body

Type: JSON

- `title` _Optional_  
  Type: `String`  
  Default: ''  
  New idea title.
- `description` _Optional_  
  Type: `String`  
  Default: ''  
  New idea description.

### Returns

_None._

### Response Example

```js
{
  status: 'ok',
}
```

### **Delete Idea**

Delete an idea.

### Endpoint

```
DELETE /api/ideas/:id
```

### Parameters

_No parameters._

### Body

_No body._

### Returns

_None._

### Response Example

```js
{
  status: 'ok',
}
```

---

## User

### Data Structure

```js
{
  _id: String,
  username: String,
  email: String,
  salt: String,
  hash: String,
}
```

### Example

```js
{
  _id: "629dd413f6cb9d22e09588a3",
  username: 'Joe',
  email: 'joe@mail.com',
  salt: 'generated_salt',
  hash: 'generated_hash',
}
```

---

### **Sign In**

User sign in.

### Endpoint

```
POST /api/user/signin
```

### Parameters

_No parameters._

### Body

Type: JSON

- `username` **Required**  
  Type: `String`  
  Default: ''  
  User's username.
- `password` **Required**  
  Type: `String`  
  Default: ''  
  User's password.

### Returns

_None._

### Response Example

```js
{
  status: 'ok',
}
```

### **Sign Up**

User sign Up.

### Endpoint

```
POST /api/user/signup
```

### Parameters

_No parameters._

### Body

Type: JSON

- `username` **Required**  
  Type: `String`  
  Default: ''  
  User's username.
- `email` **Required**  
  Type: `String`  
  Default: ''  
  User's emal.
- `password` **Required**  
  Type: `String`  
  Default: ''  
  User's password.

### Returns

_None._

### Response Example

```js
{
  status: 'ok',
}
```
