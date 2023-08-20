<!-- Boburshoh Khusanov-->

# This made in simple telegram api

## Register 
http://localhost:8080/register

### for example
```
{
    "username":"Vali_1",
   "password":"12345678",
    "first_name:":"Valijon",
    "second_name":"Shamsiyec",
    "description":"I`m fullstack developer",
    "avatarca":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6v-Quj0rUbKfkYkO5xry7QsyV_3dNemjlbw&usqp=CAU"

}
```

## Login 
http://localhost:8080/login

```
{
    "username":"Leo_10",
    "password":"khusanov"
}
```
### And return 
```
{
    "status": 200,
    "message": "Welcome back",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikxlb18xMCIsImlhdCI6MTY5MjUyMTg1OH0.5bCqTGKS9PjTUDeV5wm0wwkOEqBnEDMYv1lQxhYAZWg"
}
```

### for example
+ If your data is the same as other data, it will return an error
```
{
    "username":"Vali_1",
    "password":"12345678",
}
```

## Create groups
http://localhost:8080/groups
- You need to register before creating this group and if you going to create gruops or channels, you needs token
```
{
    "type":"private",
    "title":"programmers",
    "link":"https://t.me/boburshoh_blog",
    "avatarca":"https://zahiraccounting.com/en-my/wp-content/uploads/2015/10/zahir-accounting-software-have-more-than-60.000-users.png"

}
```

## Create chennel
http://localhost:8080/chennel
- You need to register before creating this group and if you going to create gruops or channels, you needs token
