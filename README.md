## Bong Thali -2025 Api End Points :

1.GET all foods from database :
URL :https://foodordersystem.glitch.me/api/foods
REQUEST:GET
PARAMS :None

2.Geeting Particular Food item :
URL : https://foodordersystem.glitch.me/api/food/id
REQUEST:GET
PARAMS:None

3.Adding new Food item :
URL : https://foodordersystem.glitch.me/api/food
REQUEST:POST
PARAMS: food_name , food_desc , food_price ,food_image

4.Update particular food item depends on id:
URL: https://foodordersystem.glitch.me/api/food/id
REQUEST:PUT/PATCH
PARAMS: food_name , food_desc , food_price , food_image

5.Delete particular food item depends on Id :
URL: https://foodordersystem.glitch.me/api/food/id
REQUEST:DELETE
PARAMS: None

6.GET all foods with price limit :
URL :https://foodordersystem.glitch.me/api/foods/lim1/lim2
REQEST:GET
PARAMS :lim1,lim2

## Bong Thali -2024 SignUp/Signin Api End Points :

1.SignUP :
URL :https://foodordersystem.glitch.me/api/user/signup
REQEST:POST
PARAMS :name,phone,email,pass1

2.SignIn:
URL :https://foodordersystem.glitch.me/api/user/signin
REQEST:POST
PARAMS :email,pass1
