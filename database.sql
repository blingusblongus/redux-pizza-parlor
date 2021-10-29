CREATE TABLE "pizza" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(100) NOT NULL,
	"description" VARCHAR(1000) NOT NULL,
	"price" NUMERIC (20, 2) NOT NULL,
	"image_path" VARCHAR(1000) NOT NULL
);

INSERT INTO "pizza" ("name", "description", "price", "image_path")
VALUES ('Tomato Soup','If you like pizza, but you hate the toppings, the cheese, and the crust, you''ll love this!',12.99,'https://assets.tmecosys.cn/image/upload/t_web767x639/img/recipe/vimdb/83535_751-0-4864-4864.jpg'),
('Onomatopizza','We start with a WHOMP of dough, SPLAT some marinara on it, PLOP enough cheese on there to make a mouse PEEP. Top it off with some SIZZLING bacon, and BOOM there it is! We guarantee you''ll SMACK your lips.',14.99,'https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_412,h_232/v1/img/recipes/20/52/70/pic8l60Dw.jpg'),
('Pepperoni','Classic pizza with cheese and pepperoni. Baked with a traditional crust in our brick oven.',14.99,'https://cdn.tasteatlas.com/images/dishes/b05a0af72ad845f3a6abe16143d7853a.jpg?w=600&h=450'),
('Over the Rainbow','Taste the rainbow! One ingredient of each color: pepperoni, doritos, pineapple, olives, cheese, peppers and onion. Complimentary water served in a spray bottle to taste an actual rainbow.',19.99,'https://www.pamperedchef.ca/iceberg/com/recipe/1078301-lg.jpg'),
('Chinese Firedragon','Pepperoni, pineapple and banana peppers.',15.99,'https://i.pinimg.com/originals/ce/62/24/ce6224972775e3fae7e0a5ae6d95416e.jpg'),
('Bad Date','Garlic, Onion and Pepperoni.',24.99,'https://i.imgur.com/hcnNRtE.jpg'),
('Another Little Pizza My Heart', 'Cheese Pizza. Personal size only.', 5.99,'https://kitchenatics.com/wp-content/uploads/2020/09/Cheese-pizza-1.jpg');

CREATE TABLE "orders" (
	"id" SERIAL PRIMARY KEY,
	"customer_name" VARCHAR (1000) NOT NULL,
	"street_address" VARCHAR(1000) NOT NULL,
	"city" VARCHAR(1000) NOT NULL,
	"zip" VARCHAR(20) NOT NULL,
	"type" VARCHAR(100) NOT NULL,
	"total" NUMERIC (20, 2) NOT NULL,
	"time" TIMESTAMP DEFAULT NOW() NOT NULL
);

CREATE TABLE "line_item" (
	"id" SERIAL PRIMARY KEY,
	"order_id" INT REFERENCES "orders" ON DELETE CASCADE,
	"pizza_id" INT REFERENCES "pizza",
	"quantity" INT NOT NULL
);
