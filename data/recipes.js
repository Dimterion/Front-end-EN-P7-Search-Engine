const recipes = [
    {
        "id": 1,
        "name" : "Coconut Lemonade",
        "servings" : 1,
        "ingredients": [
            {
                "ingredient" : "Coconut milk",
                "quantity" : 400,
                "unit" : "ml"
            },
            {
                "ingredient" : "Lemon juice",
                "quantity" : 2
            },
            {
                "ingredient" : "Coconut cream",
                "quantity" : 2,
                "unit" : "tablespoons"
            },
            {
                "ingredient" : "Sugar",
                "quantite" : 30,
                "unit" : "grams"
            },
            {
                "ingredient": "Ice cubes"
            }
        ],
        "time": 10,
        "description": "Place the ice cubes to your taste in the blender, add the milk, the coconut cream, the juice from 2 lemons and the sugar. Blend to the desired consistency",
        "appliance": "Blender",
        "ustensils": ["tablespoons", "glasses", "lemon squeezer" ]
    },
    {
        "id": 2,
        "name" : "Tahitian Raw Fish",
        "servings": 2,
        "ingredients": [
            {
                "ingredient" : "Bluefin Tuna (or albacore)",
                "quantity" : 200,
                "unit" : "grams"
            },
            {
                "ingredient" : "Cucumber",
                "quantity" : 1
            },
            {
                "ingredient" : "Tomato",
                "quantity" : 2
            },
            {
                "ingredient" : "Carrot",
                "quantite" : 1
            },
            {
                "ingredient" : "Lime",
                "quantity" : 5
            },
            {
                "ingredient" : "Coconut Milk",
                "quantity" : 100,
                "unit" : "ml"
            }
        ],
        "time": 60,
        "description": "Cut the tuna into cubes, place in a dish and cover with lime juice (better to use a wide, shallow dish). Place in the refrigerator for at least 2 hours. (If possible, prepare it the evening before. After leaving the fish to marinate, cut the cucumber, without the skin, into thin slices and the tomatoes, taking care to remove the seeds. Grate the carrot. Add the vegetables to the fish with the lemon in a salad bowl. Add the coconut milk. To add more flavor, you can add 1 to 2 tablespoons of coconut cream",
        "appliance": "Salad bowl",
        "ustensils": ["lemon squeezer"]
    },{
        "id": 3,
        "name": "Réunion Coconut Chicken",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Chicken",
                "quantity" : 1          
            },
            {
                "ingredient": "Coconut milk",
                "quantity" : 400,
                "unit" : "ml"
            },
            {
                "ingredient": "Tomato coulis",
                "quantity" : 25,
                "unit" : "cl"
            },
            {
                "ingredient": "Onion",
                "quantity" : 1
            },
            {
                "ingredient": "Red pepper",
                "quantity": 1
            },
            {
                "ingredient": "Olive oil"
            }
        ],
        "time": 80,
        "description": "Cut the chicken into pieces and brown them in a pan with olive oil. Season. When browned, let cook, adding water. After 30 minutes, add the tomato coulis, the coconut milk as well as the pepper and onion chopped into pieces. Let cook for an additional 30 minutes. Serve with rice",
        "appliance": "Casserole dish",
        "ustensils": ["knife"]
    },{
        "id": 4,
        "name": "Rice salad",
        "servings": 4,
        "ingredients":[
            {
                "ingredient": "White rice",
                "quantity": 500,
                "unit": "grams"
            },
            {
                "ingredient": "Crumbled tuna",
                "quantity": 200,
                "unit": "grams"
            },{
                "ingredient": "Tomato",
                "quantity": 2
            },
            {
                "ingredient": "Hard-boiled egg",
                "quantity": 2
            },
            {
                "ingredient": "Corn",
                "quantity": 300,
                "unit": "grams"
            },
            {
                "ingredient": "Dressing",
                "quantity": 5,
                "unit": "cl"
            }
        ],
        "time": 50,
        "description": "Cook the rice. Once the rice is cooked, let it cool. Cut the hard-boiled eggs into quarters or into strips as desired, dice the tomatoes, add the eggs, tomatoes, fish, corn and the dressing to the rice. Add gherkins, olives etc. to taste.",
        "appliance": "Rice cooker",
        "ustensils": ["salad bowl", "colander"]
    },
    {
        "id": 5,
        "name": "Tuna pie",
        "servings": 4,
        "ingredients":[
           {
               "ingredient": "Pastry dough",
               "quantity": 1 
           },
           {
               "ingredient": "Crumbled tuna",
               "quantity": 130,
               "unit": "grams"
           },
           {
                "ingredient": "Tomato",
                "quantity": 2
           },
           {
               "ingredient": "Crème fraîche",
               "quantity": 2,
               "unit": "tablespoons"
           },
           {
               "ingredient": "grated Gruyere",
               "quantity": 100,
               "unit": "grams"
           },
           {
                "ingredient": "Dijon mustard",
                "quantity": 1,
                "unite": "tablespoons"
           }
        ],
        "time": 45,
        "description": "Spread the dough to the size of the pan, spread the mustard on the dough, add the tuna. Cut the tomatoes into slices and place them on the fish, add a little crème fraîche to the whole pie and top with grated Gruyere. Bake for 30 minutes",
        "appliance":"Oven",
        "ustensils": ["pie dish", "cheese grater", "knife"]
    },
    {
        "id": 6,
        "name": "Apple pie",
        "servings": 6,
        "ingredients":[
            {
                "ingredient": "Short crust pastry",
                "quantity": 1
            },
            {
                "ingredient": "Apple",
                "quantity": 3
            },
            {
                "ingredient": "Egg",
                "quantity": "2"
            },
            {
                "ingredient":"Crème fraîche",
                "quantity":25,
                "unit": "cl"
            },
            {
                "ingredient": "Powdered sugar",
                "quantity": 100,
                "unit":"grams"
            },
            {
                "ingredient": "Vanilla sugar",
                "quantity": 1,
                "unit": "sachets"

            }
        ],
        "time": 50,
        "description": "Start by mixing the eggs, sugar and vanilla sugar in a salad bowl, cut the apples into slices, add the crème fraîche to the eggs. Once everything is ready, spread the pie across the pan. Don't forget to prick the base with a fork before placing the apples on the pie. Finally, pour the egg and crême fraîche-based mixture over the top. Bake for 30 minutes",
        "appliance": "Oven",
        "ustensils": ["pie dish", "salad bowl", "fork"]
    },{
        "id": 7,
        "name": "Chocolate and strawberry tartlets",
        "servings": 6,
        "ingredients":[
            {
                "ingredient": "Shortbread pastry dough",
                "quantity": 1
            }, 
            {
                "ingredient": "Milk chocolate",
                "quantity": 300,
                "unit": "grams"
            },
            {
                "ingredient": "Liquid cream",
                "quantity": 80,
                "unit": "cl"
            },
            {
                "ingredient": "Butter",
                "quantity": "30",
                "unit": "grams"
            },
            {
                "ingredient": "Strawberry",
                "quantity": 6
            }
        ],
        "time": 50,
        "description": "Spread the dough into the tartlet pans. Cook the dough for 30 minutes. Cut the chocolate into pieces and heat it up, add the liquid cream to it, add the butter and stir until you have a smooth paste. Pour the paste onto the tartlets. Cut the strawberries in half and place them on top ",
        "appliance":"Oven",
        "ustensils":["moule à tartelettes (6)", "casserolle"]
    }, {
        "id": 8,
        "name": "Brownie",
        "servings": 10,
        "ingredients":[
           {
                "ingredient": "Nuts",
                "quantity": "180",
                "unit": "grams"
           },
           {
               "ingredient": "Dark chocolate",
               "quantity": 150,
               "unit": "grams"
           },
           {
               "ingredient": "Butter",
               "quantity": 120,
               "unit": "grams"
           },
           {
                "ingredient": "Egg",
                "quantity": 2
           },
           {
               "ingredient": "Powdered sugar",
               "quantity": "110",
               "unit": "grams"
           },
           {
                "ingredient": "flour",
                "quantity": 90,
                "unit": "grams"
           }

        ], 
        "time": 60,
        "description": "Chop the nuts coarsely. Melt the chocolate with the butter. Mix together the egg and sugar and mix them with the chocolate. Add the flour. Mix until smooth then add the nuts. Pour the mixture into a baking pan, preferably rectangular. Bake at 180° for 20 to 25 minutes. Take out of the oven and wait a few minutes before removing from the pan. Serve with a scoop of ice cream for more indulgence.",
        "appliance": "Oven",
        "ustensils": ["cake mold", "pan"]
    },
    {
        "id": 9,
        "name": "Fresh Mediterranean goat's cheese salad",
        "servings": 4,
        "ingredients":[
            {
                "ingredient": "Cucumber",
                "quantity": 1
            },
            {
                "ingredient": "Olives"
            },
            {
                "ingredient": "Goat's cheese",
                "quantity": 150,
                "unit": "grams"
            },
            {
                "ingredient": "Balsamic vinegar"
            },
            {
                "ingredient": "Olive oil"
            }, 
            {
                "ingredient": "Basil" 
 }
 ],
 "time": 15,
 "description": "Peel the cucumber and cut it in half, remove the seeds. Cut the olives and goat's cheese into pieces. Add the basil and balsamic vinegar and olive oil to taste.",
        "appliance":"Salad bowl",
        "ustensils":["cuillère en bois", "couteau"]
    },
    {
        "id": 10,
        "name": "Tartiflette",
        "servings": 4,
        "ingredients":[
            {
                "ingredient": "Reblochon",
                "quantity": "1"
            },
            {
                "ingredient": "Potatoes",
                "quantity": 4.5,
                "unit": "kg"
            },
            {
                "ingredient": "Smoked ham",
                "quantity": 2,
                "unit": "slices"
            },
            {
                "ingredient": "Onion",
                "quantity": 300,
                "unit": "grams"
            },
            {
                "ingredient": "Dry white wine",
                "quantity": 30,
                "unit": "cl"
            }
        ],
        "time": 60,
        "description": "Begin by cooking the potatoes in boiling water. Then peel them and cut them into slices. Slice the onions and brown them in butter. Add the smoked ham cut and potatoes, both into pieces. Season to your taste (and that of your guests). Cook for around 10 minutes then add the white wine. After 5 minutes, place it all into a baking dish. Cut up the reblochon, either in slices, or cut into halves from the side and cover the potatoes. Bake (approximately 220°) for 25 minutes. It's ready!",
        "appliance":"Oven",
        "ustensils": ["baking dish", "knife", "Peeling"]
    },{
        "id": 11,
        "name": "Tomato, mozzarella and apple salad",
        "servings": 4,
        "ingredients":[
            {
                "ingredient": "Cherry tomatoes",
                "quantity": 250,
                "unit": "grams"
            },
            {
                "ingredient": "Mozzarella",
                "quantity": 150,
                "unit": "grams"
            },
            {
                "ingredient": "Parma ham",
                "quantity": 4,
                "unit": "slices"
            }, 
            {
                "ingredient": "Apples",
                "quantity": 1
            },
            {
                "ingredient": "Green salad",
                "quantity": 1
            },
            {
                "ingredient": "Dressing",
                "quantity": 5,
                "unit": "cl"
            }
        ],
        "time": 10,
        "description": "Begin by cutting the salad leaves, add the cherry tomatoes and the cheese, cut into cubes or balls with a melon spoon. Cut the Parma ham into thin strips. Add the apple, also cut into small pieces. Season to your taste. ",
        "appliance": "Salad bowl",
        "ustensils": ["knife", "melon spoon" ]
    },{
        "id": 12,
        "name": "Rhubarb and apple compote",
        "servings": 4,
        "ingredients":[
            {
                "ingredient": "Rhubarb",
                "quantity": 160,
                "unit": "grams"
            },
            {
                "ingredient": "Apples",
                "quantity": 8
            },
            {
                "ingredient": "Vanilla sugar",
                "quantity": 6,
                "unit": "sachets"
            },
            {
                "ingredient": "Water",
                "quantity" : "0.5",
                "unit" : "cups"
            }
        ],
        "time": 40,
        "description": "Peel the fruit and cut it into pieces, place it in a pan, adding the water and vanilla sugar. Leave to cook for 15 minutes, stirring regularly.",
        "appliance": "Pan",
        "ustensils": ["knife", "peeling"]
    },
    {
        "id": 13,
        "name": "Mashed potato salad",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Mashed",
                "quantity": 60,
                "unit": "grams"
            },
            {
                "ingredient": "Potatoes",
                "quantity": 200,
                "unit": "grams"
            },
            {
                "ingredient": "Shallot",
                "quantity": 2

            },
            {
                "ingredient": "Cider vinegar",
                "quantity": 1,
                "unit":"tablespoon"
            },
            {
                "ingredient": "olive oil",
                "quantity": 2,
                "unit": "tablespoon"
            }
        ],
        "time":40,
        "description":"Cook the potatoes for around 30 minutes. Thinly slice the shallots. While the potatoes are cooking. Prepare the dressing with the olive oil and the cider vinegar. Season to taste. Place the mash into a salad bowl. Add",
        "appliance": "Pan",
        "ustensils":["couteau","saladier","cuillère en bois"]
    },
    {
        "id": 14,
        "name": "Breton sausage and raclette cheese galette pancake",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Breton or Toulouse sausage",
                "quantity": 2
            },
            {
                "ingredient": "Buckwheat flour",
                "quantity": 130,
                "unit": "grams"
            },
            {
                "ingredient": "Egg",
                "quantity": 1

            },
            {
                "ingredient": "Raclette cheese",
                "quantity": 300,
                "unit":"grams"
            },
            {
                "ingredient": "Onion",
                "quantity": 1
            },
            {
                "ingredient": "Butter",
                "quantity": 75,
                "unit": "grams"
            }

        ],
        "time": 100,
        "description":"Mix the flour and eggs together, melt 25 grams of butter and add to the paste. Add salt. Leave to rest for 1 hour. Make the galette pancakes and leave to cool. Heat the sausages with the butter and the onion. Wrap the sausages in the pancakes with some of the cheese. Place the rest of the raclette cheese on top of the pancakes. Bake for 20 minutes",
        "appliance": "Oven",
        "ustensils":["poelle à frire","couteau"]
    },
    {
        "id": 15,
        "name": "Chocolate and Banana Pancakes",
        "servings": 10,
        "ingredients": [
            {
                "ingredient": "Egg",
                "quantity": 3
            },
            {
                "ingredient": "Flour",
                "quantity": 250,
                "unit": "grams"
            },
            {
                "ingredient": "Milk",
                "quantity": 600,
                "unit": "ml"
            },
            {
                "ingredient": "Salted butter",
                "quantity": 30,
                "unit":"grams"
            },
            {
                "ingredient": "Milk chocolate",
                "quantity": 100,
                "unit": "grams"
            },
            {
                "ingredient": "Banana",
                "quantity": 4
            }
        ],
        "time": 60,
        "description":"Mix the flour, eggs and milk together in a salad bowl. Beat until the mixture is smooth. Meanwhile, melt the butter and add some of it to the pancake batter. Melt the chocolate (with the remaining salted butter). While you heat the pancakes. Add the melted chocolate and the sliced bananas. Add a touch of whipped cream for style",
        "appliance": "Pancake pan",
        "ustensils":["saladier", "louche", "cuillère en bois"]
    },
    {
        "id": 16,
        "name": "Tomato pasta gratin",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Tomato",
                "quantity": 500,
                "unit": "grams"
            },
            {
                "ingredient": "Mozzarella",
                "quantity": 250,
                "unit": "grams"
            },
            {
                "ingredient": "Penne",
                "quantity": 500,
                "unit": "grams"
            },
            {
                "ingredient": "Basil",
                "quantity": 1,
                "unit":"vines"
            },
            {
                "ingredient": "olive oil",
                "quantity": 2,
                "unit": "tablespoon"
            }
        ],
        "time": 45,
        "description":"Cook the pasta. If you do not have penne, pasta shells will work just as well. Cut the tomatoes into small pieces, either sliced or diced. Cut the basil into small pieces and mix it in with the tomatoes. Cut the mozzarella into slices. Preheat the oven to 200°. Alternate between layers of pasta and layers of tomatoes, finish off with a layer of pasta and cover with cheese. Bake for 30 minutes and enjoy! A simple recipe that will please the little ones as well as the grown ups.",
        "appliance": "Oven",
        "ustensils":["plat à gratin", "couteau", "râpe à fromage"]
    },
    {
        "id": 17,
        "name": "Strawberry smoothie",
        "servings": 6,
        "ingredients": [
            {
                "ingredient": "Strawberry",
                "quantity": 500,
                "unit": "grams"
            },
            {
                "ingredient": "Watermelon",
                "quantity": 0.5
            },
            {
                "ingredient": "Lemon juice",
                "quantity": 1,
                "unit":"tablespoons"
            },
            {
                "ingredient": "Ice cubes",
                "quantity": 8
            },
            {
                "ingredient": "Mint"
            }
        ],
        "time": 15,
        "description":"Cut the strawberries into pieces, cut out the melon's flesh and remove the seeds. Place together into a blender. Add a tablespoon of lemon juice as well as the ice cubes. Add some mint leaves for more freshness. Blend it. Serve and enjoy.",
        "appliance": "Blender",
        "ustensils":["verres", "couteau", "presse citron"]
    },
    {
        "id": 18,
        "name": "Pineapple and vanilla smoothie",
        "servings": 5,
        "ingredients": [
            {
                "ingredient": "Pineapple",
                "quantity": 1
            },
            {
                "ingredient": "Vanilla ice cream",
                "quantity": 500,
                "unit": "ml"
            },
            {
                "ingredient": "Milk",
                "quantity": 50,
                "unit": "cl"
            }
        ],
        "time": 10,
        "description":"Break off 1/5th of the pineapple (a nice slice that will serve as decoration for the glasses), place the rest, cut into cubes, in the blender, add the vanilla ice cream and the milk. Blend. Serve and decorate with the remaining pineapple. It's ready",
        "appliance": "Blender",
        "ustensils":["verres", "couteau"]
    },
    {
        "id": 19,
        "name": "Banana and Kiwi Fruit Shake",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Kiwi Fruit",
                "quantity": 4
            },
            {
                "ingredient": "Lemon",
                "quantity": 1
            },
            {
                "ingredient": "Milk",
                "quantity": 1,
                "unit": "liters"
            },
            {
                "ingredient": "Icing sugar",
                "quantity": 30,
                "unit":"grams"
            },
            {
                "ingredient": "Banana",
                "quantity": 1
            }
        ],
        "time": 0,
        "description":"Cut the fruit into pieces, add the lemon juice, milk and icing sugar. Blend. Add some ice cubes if the milk has not been chilled.",
        "appliance": "Blender",
        "ustensils":["couteau", "verres", "presse citron"]
    },
    {
        "id": 20,
        "name": "Pasta Carbonara",
        "servings": 5,
        "ingredients": [
            {
                "ingredient": "Tagliatelle",
                "quantity": 500,
                "unit": "grams"
            },
            {
                "ingredient": "Lardons",
                "quantity": 150,
                "unit": "grams"
            },
            {
                "ingredient": "Crème fraîche",
                "quantity": 200,
                "unit": "grams"
            },
            {
                "ingredient": "Parmesan",
                "quantity": 100,
                "unit":"grams"
            },
            {
                "ingredient": "olive oil",
                "quantity": 1,
                "unit": "tablespoons"
            }
        ],
        "time": 30,
        "description":"Cook the pasta as shown on the packet. Brown the lardons in a skillet with olive oil. Add the crème fraîche and turn the heat down to minimum. When the Tagliatelle is ready, place it in the skillet and mix it all together well, adding an egg yolk. Serve and add grated parmesan.",
        "appliance": "Skillet",
        "ustensils":["râpe à fromage", "cuillère en bois"]
    },
    {
        "id": 21,
        "name": "Spaghetti Bolognaise",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Spaghetti",
                "quantity": 400,
                "unit": "grams"
            },
            {
                "ingredient": "Onion",
                "quantity": 2
            },
            {
                "ingredient": "Tomato coulis",
                "quantity": 300,
                "unit":"grams"
            },
            {
                "ingredient": "Minced meat, 1% fat",
                "quantity": 400,
                "unit":"grams"
            },
            {
                "ingredient": "Red wine",
                "quantity": 20,
                "unit": "cl"
            },
            {
                "ingredient": "Crème Fraîche",
                "quantity" : 1,
                "unit": "tablespoons"
            }
        ],
        "time": 30,
        "description":"Cook the minced meat in a frying pan. In another, cook the onions, chopped into thin cubes, with a bit of butter. Add some red wine. Mix the onions with the minced meat. Cook the pasta for the time shown on the packet. Add the tomato coulis to the minced meat. Once the pasta is cooked, add the crème fraîche to the minced meat. Serve.",
        "appliance": "Pan.",
        "ustensils":["Cuillère en bois", "louche", "couteau"]
    },
    {
        "id": 22,
        "name": "Chocolate fondant",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Butter",
                "quantity": 160,
                "unit": "grams"
            },
            {
                "ingredient": "Dark chocolate",
                "quantity": 200,
                "unit": "grams"
            },
            {
                "ingredient": "Flour",
                "quantity": 50,
                "unit": "grams"
            },
            {
                "ingredient": "Egg",
                "quantity": 4
            },
            {
                "ingredient": "Sugar",
                "quantity": 150,
                "unit": "grams"
            }
        ],
        "time": 30,
        "description":"Melt the chocolate and the butter in a double boiler. Beat the eggs with the sugar in a salad bowl until the mixture has a mousse-like texture. Add the flour as well as the melted butter and chocolate mixture. Butter the cake mold. Place in an oven preheated to 200° then heat through for a further 15 minutes. It's ready. Serve with a scoop of ice cream or double cream.",
        "appliance": "Oven",
        "ustensils":["moule à gateaux", "fouet", "casserolle"]
    },
    {
        "id": 23,
        "name": "Quiche Lorraine",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Short crust pastry dough",
                "quantity": 200,
                "unit": "grams"
            },
            {
                "ingredient": "Lardons",
                "quantity": 200,
                "unit": "grams"
            },
            {
                "ingredient": "Butter",
                "quantity": 30,
                "unit": "grams"
            },
            {
                "ingredient": "Egg",
                "quantity": 3
            },
            {
                "ingredient": "Crème Fraîche",
                "quantity": 20,
                "unit": "cl"
            },
            {
                "ingredient": "Milk",
                "quantity": 20,
                "unit": "cl"
            }
        ],
        "time": 60,
        "description":"Line a baking pan with the dough and prick it. Scatter butter over it. Heat the lardons in a frying pan. Beat the eggs together adding the crème fraîche and the milk. Finally, add the lardons, season to your taste. Pour the mixture over the pastry. Cook for approximately 50 minutes.",
        "appliance": "Oven",
        "ustensils":["moule à gateaux", "rouleau à patisserie", "fouet"]
    },
    {
        "id": 24,
        "name": "Pasta salad",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Crumbled tuna",
                "quantity": 160,
                "unit": "grams"
            },
            {
                "ingredient": "Corn",
                "quantity": 60,
                "unit": "grams"
            },
            {
                "ingredient": "Tomato",
                "quantity": 1
            },
            {
                "ingredient": "Cucumber",
                "quantity": 0.5
            },
            {
                "ingredient": "Macaroni",
                "quantity": 300,
                "unit": "grams"
            },
            {
                "ingredient": "Mayonnaise",
                "quantity": 2,
                "unit": "tablespoons"
            }
        ],
        "time": 40,
        "description":"Dice the cucumber and the tomatoes, place them in a salad bowl with the corn and crumbled fish, add the pasta. Add the mayonnaise. Mix it all together and serve chilled.",
        "appliance": "Salad bowl",
        "ustensils":["couteau", "cuillère en bois"]
    },
    {
        "id": 25,
        "name": "Cookies",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Sugar",
                "quantity": 100,
                "unit": "grams"
            },
            {
                "ingredient": "Butter",
                "quantity": 100,
                "unit": "grams"
            },
            {
                "ingredient": "Flour",
                "quantity": 100,
                "unit": "grams"
            },
            {
                "ingredient": "Dark chocolate chips",
                "quantity": 100,
                "unit":"grams"
            },
            {
                "ingredient": "Egg",
                "quantity": 1
            }
        ],
        "time": 30,
        "description":"Melt the butter and mix it together with the sugar. Finally, add the egg. Add the flour while mixing slowly to get a smooth mixture without lumps. Add the chocolate chips. Prepare a baking tray with little cut-outs for the cookies. Bake for 10 minutes at 180°.",
        "appliance": "Oven",
        "ustensils":["fouet", "saladier", "plaque de cuisson"]
    },
    {
        "id": 26,
        "name": "Tomato soup",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Tomato",
                "quantity": 6
            },
            {
                "ingredient": "Potatoes",
                "quantity": 1
            },
            {
                "ingredient": "Olive oil"
            },
            {
                "ingredient": "Onion",
                "quantity": 1
            },
            {
                "ingredient": "Garlic",
                "quantity": 1,
                "unit": "cloves"
            }
        ],
        "time": 25,
        "description":"Pour the oil into a pressure cooker, cut the vegetables and pour them into the hot oil. Leave to cook and stir for 10 minutes. Mix in a blender. Serve.",
        "appliance": "Blend",
        "ustensils":["cocotte minute", "couteau"]
    },
    {
        "id": 27,
        "name": "Sorrel soup",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Sorrel",
                "quantity": 2
            },
            {
                "ingredient": "Egg",
                "quantity": 1
            },
            {
                "ingredient": "Crème fraîche",
                "quantity": 4,
                "unit": "tablespoon"
            },
            {
                "ingredient": "Noodles",
                "quantity": 1,
                "unit":"glasses"
            },
            {
                "ingredient": "Salted butter",
                "quantity": 50,
                "unit": "grams"
            }
        ],
        "time": 15,
        "description":"Melt the sorrel with the semi-salted butter, add a liter of water. Add the noodles. Cook. When ready, remove from the heat and after 5 minutes, add the egg yolk and the crème fraîche.",
        "appliance": "Pan",
        "ustensils":["couteau","cuillère en bois"]
    },
    {
        "id": 28,
        "name": "Leek soup",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Leek",
                "quantity": 3
            },
            {
                "ingredient": "Potatoes",
                "quantity": 400,
                "unit": "grams"
            },
            {
                "ingredient": "Sorrel",
                "quantity": 75,
                "unit": "grams"
            },
            {
                "ingredient": "Butter",
                "quantity": 50,
                "unit":"grams"
            },
            {
                "ingredient": "Crème fraîche",
                "quantity": 10,
                "unit": "cl"
            }
        ],
        "time": 80,
        "description":"Chop the whites of the leeks into slices and heat them up in 25 grams of butter. Add the potatoes, cut into pieces. Add the water and leave to simmer for 45 minutes. Heat the sorrel with the remaining butter then add it all together. Blend. Add the cream. Enjoy.",
        "appliance": "Blend",
        "ustensils":["casserolle","couteau"]
    },
    {
        "id": 29,
        "name": "Quick Hummus",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Chickpeas",
                "quantity": 1,
                "unit": "tins"
            },
            {
                "ingredient": "Garlic",
                "quantity": 1,
                "unit": "cloves"
            },
            {
                "ingredient": "Lemon",
                "quantity": 2
            },
            {
                "ingredient": "Olive oil"
            },
            {
                "ingredient": "Paprika"
            }
        ],
        "time": 30,
        "description":"Take the chickpeas, place them in the blender with the olive oil, add the juice from 2 lemons and some paprika, according to taste.",
        "appliance": "Blend",
        "ustensils":["cuillère en bois", "presse citron"]
    },
    {
        "id": 30,
        "name": "Split pea purée",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Split Pea",
                "quantity": 500,
                "unit": "grams"
            },
            {
                "ingredient": "Onion",
                "quantity": 1
            },
            {
                "ingredient": "Garlic",
                "quantity": 2,
                "unit": "cloves"
            }
        ],
        "time": 60,
        "description":"Place all of the ingredients into a casserole dish. Add water to cover everything and simmer for 1 hour. Mix in a blender. Season. It's ready",
        "appliance": "Blend",
        "ustensils":["casserolle", "cuillère en bois"]
    },
    {
        "id": 31,
        "name": "Mixed vegetables",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Carrot",
                "quantity": 2
            },
            {
                "ingredient": "Potatoes",
                "quantity": 2
            },
            {
                "ingredient": "Green beans",
                "quantity": 150,
                "unit": "grams"
            },
            {
                "ingredient": "Peas",
                "quantity": 100,
                "unit":"grams"
            },
            {
                "ingredient": "Bacon",
                "quantity": 150,
                "unit": "grams"
            }
        ],
        "time": 60,
        "description":"Chop the carrots and potatoes into cubes. Brown them off in the butter. Add the bacon. When the bacon is browned, add a large glass of water. Add the peas and the green beans (both pre-cooked). Add salt, pepper, thyme and bay leaves",
        "appliance": "Frying pan",
        "ustensils":["Couteau", "économe"]
    },
    {
        "id": 32,
        "name": "Turkey Croque Monsieur",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Sandwich bread",
                "quantity": 8,
                "unit": "slices"
            },
            {
                "ingredient": "Turkey breast",
                "quantity": 4,
                "unit": "slices"
            },
            {
                "ingredient": "Emmental",
                "quantity": 8,
                "unit": "slices"
            },
            {
                "ingredient": "Gruyere",
                "quantity": 100,
                "unit":"grams"
            },
            {
                "ingredient": "Milk",
                "quantity": 5,
                "unit": "cl"
            },
            {
                "ingredient": "Nutmeg",
                "quantity": 1,
                "unit": "pinches"
            }
        ],
        "time": 20,
        "description":"Butter the slices of bread, add a slice of Emmental, one slice of turkey breast and another slice of Emmental between 2 slices of sandwich bread. In a bowl, mix the grated Gruyere with the milk and the nutmeg. Place on top of the croque monsieurs. Bake for 10 minutes.",
        "appliance": "Oven",
        "ustensils":["râpe à fromage", "cuillère à Soupe", "couteau"]
    },
    {
        "id": 33,
        "name": "Smoked salmon sandwich",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Sandwich bread",
                "quantity": 8,
                "unit": "slices"
            },
            {
                "ingredient": "Smoked Salmon",
                "quantity": 4,
                "unit": "slices"
            },
            {
                "ingredient": "Lettuce leaves",
                "quantity": 4
            },
            {
                "ingredient": "Cottage cheese",
                "quantity": 4,
                "unit":"tablespoons"
            },
            {
                "ingredient": "Lemon juice",
                "quantity": 1,
                "unit": "tablespoons"
            }
        ],
        "time": 5,
        "description":"Mix the cottage cheese with the lemon. Season to taste. Brown the sandwich bread. Then spread the mixture. Add a salad leaf then the smoked salmon. It's ready.",
        "appliance": "Oven",
        "ustensils":["couteau", "cuillère en bois"]
    },
    {
        "id": 34,
        "name": "Sweet potato mash",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Sweet potato",
                "quantity": 800,
                "unit": "grams"
            },
            {
                "ingredient": "Crème fraîche",
                "quantity": 20,
                "unit": "cl"
            },
            {
                "ingredient": "Olive oil"
            },
            {
                "ingredient": "Orange",
                "quantity": 1
            }
        ],
        "time": 25,
        "description":"Peel the sweet potatoes and cut them into pieces. Cook them for 20 minutes in a pan of boiling water. Place them in the blender adding the cream and olive oil to your taste. Season. Squeeze the orange and add the juice to the mixture. Serve.",
        "appliance": "Blend",
        "ustensils":["couteau", "économe", "cuillère en bois"]
    },
    {
        "id": 35,
        "name": "Carrot purée",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Carrot",
                "quantity": 6
            },
            {
                "ingredient": "Potatoes",
                "quantity": 1
            },
            {
                "ingredient": "Butter",
                "quantity": 20,
                "unit": "grams"
            },
            {
                "ingredient": "Crème fraîche",
                "quantity": 2,
                "unit":"tablespoons"
            },
            {
                "ingredient": "Cumin",
                "quantity": 1,
                "unit": "teaspoons"
            },
            {
                "ingredient": "Nutmeg",
                "quantity": 1,
                "unit": "pinches"
            }
        ],
        "time": 25,
        "description":"Peel the vegetables, cut them into pieces and cook them in a pressure cooker for 15 minutes. Blend adding the butter and cream. Add the cumin and nutmeg.",
        "appliance": "Blend",
        "ustensils":["cocotte minute", "couteau", "cuillère en bois"]
    },
    {
        "id": 36,
        "name": "Goat and Zucchini Lasagne",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Zucchini",
                "quantity": 2
            },
            {
                "ingredient": "Goat's cheese",
                "quantity": 4
            },
            {
                "ingredient": "Milk",
                "quantity": 25,
                "unit": "cl"
            },
            {
                "ingredient": "Lasagne",
                "quantity": 5,
                "unit":"sheets"
            },
            {
                "ingredient": "Gruyere",
                "quantity": 40,
                "unit": "grams"
            },
            {
                "ingredient": "Corn starch",
                "quantity": 1,
                "unit": "tablespoons"
            }
        ],
        "time": 35,
        "description":"Grate the zucchini and brown them for 15 minutes. Add the fresh goat's cheese. Prepare the Bechamel with the milk and corn starch. Season, add the nutmeg according to taste. In a dish, place a bit of the sauce at the bottom, then some lasagne sheets, then some zucchini, etc. Finish with the sauce and add the Gruyere. Bake for 20 to 25 minutes at 180°.",
        "appliance": "Oven",
        "ustensils":["plat à gratin", "râpe à fromage", "fouet"]
    },
    {
        "id": 37,
        "name": "Stuffed zucchini with beef",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Zucchini",
                "quantity": 2
            },
            {
                "ingredient": "Minced meat",
                "quantity": 600,
                "unit": "grams"
            },
            {
                "ingredient": "Olive oil",
                "quantity": 25,
                "unit": "cl"
            },
            {
                "ingredient": "Onion",
                "quantity": 1
            },
            {
                "ingredient": "Tomato coulis",
                "quantity": 20,
                "unit": "cl"
            },
            {
                "ingredient": "Gruyere",
                "quantity": 50,
                "unit": "grams"
            }
            
        ],
        "time": 60,
        "description":"Cut the zucchini lengthwise. Place the zucchini into a salad bowl. Set aside. Sauté the zucchini in 25cl of olive oil. Add the onion then the minced meat. Place the stuffing in the zucchini. Add the tomato coulis. Bake for 30 minutes. Before the end of baking, add the grated cheese",
        "appliance": "Oven",
        "ustensils":["couteau", "cuillère en bois", "Poelle à frire"]
    },
    {
        "id": 38,
        "name": "French Toast",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Bread",
                "quantity": 6,
                "unit":"slices"
            },
            {
                "ingredient": "Milk",
                "quantity": 25,
                "unit": "cl"
            },
            {
                "ingredient": "Egg",
                "quantity": 3
            },
            {
                "ingredient": "Brown sugar",
                "quantity": 75,
                "unit": "grams"
            }
        ],
        "time": 20,
        "description":"Whisk the eggs, sugar and milk. Soak the bread slices. Bake for approximately 10 minutes at 180°. Serve",
        "appliance": "Oven",
        "ustensils":["fouet", "bol","Cuillère à Soupe"]
    },
    {
        "id": 39,
        "name": "Apple crumble",
        "servings": 40,
        "ingredients": [
            {
                "ingredient": "Apple",
                "quantity": 2
            },
            {
                "ingredient": "Flour",
                "quantity": 100,
                "unit": "grams"
            },
            {
                "ingredient": "Butter",
                "quantity": 50,
                "unit": "grams"
            },
            {
                "ingredient": "Brown sugar",
                "quantity": 80,
                "unit":"grams"
            }
        ],
        "time": 40,
        "description":"Dice the apples. Mix the flour, sugar and butter in a salad bowl. Mix well. Butter the baking dish and add the apples. Place the mixture that you've made on top. Bake for 20 minutes",
        "appliance": "Oven",
        "ustensils":["saladier", "couteau","fouet"]
    },
    {
        "id": 40,
        "name": "Lemonade",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Water",
                "quantity": 1,
                "unit": "Liters"
            },
            {
                "ingredient": "Lime",
                "quantity": 3
            },
            {
                "ingredient": "Powdered sugar",
                "quantity": 4,
                "unit":"teaspoons"
            },
            {
                "ingredient": "Baking soda",
                "quantity": 1,
                "unit": "teaspoons"
            }
        ],
        "time": 10,
        "description":"Place the water, lemon juice and sugar in a salad bowl. Mix well. Add the baking soda. Serve. Add the ice cubes and a mint leaf for decoration.",
        "appliance": "Salad bowl",
        "ustensils":["cuillère en bois"]
    },
    {
        "id": 41,
        "name": "Chocolate mousse",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Egg",
                "quantity": 3
            },
            {
                "ingredient": "Dark chocolate",
                "quantity": 100,
                "unit": "grams"
            },
            {
                "ingredient": "Vanilla sugar",
                "quantity": 1,
                "unit": "sachets"
            }
        ],
        "time": 20,
        "description":"Separate the egg whites. Melt the chocolate in a double boiler. Add the yolk and the sugar to the chocolate away from the heat. Beat the egg whites until still. Add the egg whites to the chocolate mixture. Mix gently with a spatula. Serve in a dish or in glasses. Chill",
        "appliance": "Pan",
        "ustensils":["fouet", "spatule", "verres"]
    }, 
    {
        "id": 42,
        "name": "Charlotte with pears",
        "servings": 3,
        "ingredients": [
            {
                "ingredient": "Chocolate",
                "quantity": 200,
                "unit": "grams"
            },
            {
                "ingredient": "Egg",
                "quantity": 3
            },
            {
                "ingredient": "Pears in juice",
                "quantity": 0.5,
                "unit" : "cans"
            },
            {
                "ingredient": "Ladyfingers",
                "quantity": 15
            }
        ],
        "time": 60,
        "description":"Begin by preparing the chocolate mousse at least 2 hours in advance. When the mousse is ready and rested. Moisten the ladyfingers in the pear juice. Arrange them. Alternate: chocolate mousse, ladyfingers and pears. Chill.",
        "appliance": "Charlotte mold",
        "ustensils":["saladier", "couteau", "fouet"]
    },
    {
        "id": 43,
        "name": "Lemon pie",
        "servings": 6,
        "ingredients": [
            {
                "ingredient": "Short crust pastry dough",
                "quantity": 200,
                "unit": "grams"
            },
            {
                "ingredient": "Sugar",
                "quantity": 150,
                "unit": "grams"
            },
            {
                "ingredient": "Melted butter",
                "quantity": 100,
                "unit": "grams"
            },
            {
                "ingredient": "Egg",
                "quantity": 3
            },
            {
                "ingredient": "Lemon"
            }
        ],
        "time": 50,
        "description":"Preheat the oven to 200°. Spread the dough. Place into a pie dish. Beat the eggs with the sugar. Add the lemon juice and the butter. Pour it onto the pastry. Bake for 30 minutes. Enjoy your meal ",
        "appliance": "Oven",
        "ustensils":["rouleau à patisserie", "moule à tarte", "presse citron"]
    }, 
    {
        "id": 44,
        "name": "Chocolate cream dessert",
        "servings": 6,
        "ingredients": [
            {
                "ingredient": "Milk",
                "quantity": 1,
                "unit": "liters"
            },
            {
                "ingredient": "Chocolate",
                "quantity": 200,
                "unit": "grams"
            },
            {
                "ingredient": "Sugar",
                "quantity": 100,
                "unit": "grams"
            },
            {
                "ingredient": "Butter",
                "quantity": 50,
                "unit":"grams"
            },
            {
                "ingredient": "flour",
                "quantity": 40,
                "unit": "grams"
            }
        ],
        "time": 15,
        "description":"Mix the flour and the melted butter, slowly adding the milk. Add some sugar after cooking. Mix well. Add the chocolate pieces and heat for 8 minutes, mixing with a wooden spoon. Place into glasses",
        "appliance": "Pan",
        "ustensils":["cuillère en bois"]
    },
    {
        "id": 45,
        "name": "Pastry cream",
        "servings": 8,
        "ingredients": [
            {
                "ingredient": "Milk",
                "quantity": 50,
                "unit": "cl"
            },
            {
                "ingredient": "Egg",
                "quantity": 2
            },
            {
                "ingredient": "Flour",
                "quantity": 30,
                "unit": "grams"
            },
            {
                "ingredient": "Sugar",
                "quantity": 80,
                "unit":"grams"
            }
        ],
        "time": 30,
        "description":"Boil the milk (you can add some vanilla essence to it. Beat the eggs and the sugar, add the flour then finally add the hot milk. Place onto a low heat to thick, stirring for approximately 5 to 10 minutes.",
        "appliance": "Pan",
        "ustensils":["fouet","saladier"]
    },
    {
        "id": 46,
        "name": "Far Breton",
        "servings": 6,
        "ingredients": [
            {
                "ingredient": "Flour",
                "quantity": 250,
                "unit": "grams"
            },
            {
                "ingredient": "Sugar",
                "quantity": 150,
                "unit": "grams"
            },
            {
                "ingredient": "Vanilla sugar",
                "quantity": 1,
                "unit": "sachets"
            },
            {
                "ingredient": "Egg",
                "quantity": 4
            },
            {
                "ingredient": "Milk",
                "quantity": 1,
                "unit": "liter"
            },
            {
                "ingredient": "Plums",
                "quantity": 100,
                "unit": "grams"
            }
        ],
        "time": 60,
        "description":"Mix the flour with the sugar and the eggs adding some vanilla sugar. Slowly add the milk. Add a small glass of rum. Pour the mixture into a buttered dish placing the plums on top and bake for 45 minutes at 200°",
        "appliance": "Oven",
        "ustensils":["fouet", "moule", "verres"]
    },
    {
        "id": 47,
        "name": "Lemon mousse",
        "servings": 6,
        "ingredients": [
            {
                "ingredient": "Lemon juice",
                "quantity": 100,
                "unit": "grams"
            },
            {
                "ingredient": "Mascarpone",
                "quantity": 250,
                "unit": "grams"
            },
            {
                "ingredient": "Sugar",
                "quantity": 100,
                "unit": "grams"
            },
            {
                "ingredient": "Crème Fraîche",
                "quantity": 20,
                "unit":"cl"
            }
        ],
        "time": 5,
        "description":"Mix the lemon juice with the sugar and the mascarpone. Add the crème fraîche. Mix it together and place in the freezer for 1 hour. Serve",
        "appliance": "Salad bowl",
        "ustensils":["fouet", "verres", "cuillère en bois"]
    },
    {
        "id": 48,
        "name": "Pizza",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Pizza dough",
                "quantity": 1
            },
            {
                "ingredient": "Peeled tomatoes",
                "quantity": 1,
                "unit": "cans"
            },
            {
                "ingredient": "Bacon",
                "quantity": 1,
                "unit": "trays"
            },
            {
                "ingredient": "Button mushrooms",
                "quantity": 1,
                "unit":"cans"
            },
            {
                "ingredient": "Gruyere",
                "quantity": 200,
                "unit": "grams"
            }
        ],
        "time": 40,
        "description":"Roll out the pizza dough. Mash the peeled tomatoes, spread them over the dough, add the bacon and mushrooms. Add the Gruyere and bake for 20 minutes at 220°",
        "appliance": "Oven",
        "ustensils":["rouleau à patisserie", "râpe à fromage","couteau"]
    },
    {
        "id": 49,
        "name": "Tropical smoothie",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Bananas",
                "quantity": 2
            },
            {
                "ingredient": "Kiwis",
                "quantity": 3
            },
            {
                "ingredient": "Mango",
                "quantity": 1
            },
            {
                "ingredient": "Pineapple",
                "quantity": 4,
                "unit":"slices"
            },
            {
                "ingredient": "Honey",
                "quantity": 2,
                "unit": "tablespoons"
            }
        ],
        "time": 0,
        "description":"Chop the fruit. Liquefy in the blender. Chill. Serve",
        "appliance": "Blender",
        "ustensils":["couteau", "verres"]
    },
    {
        "id": 50,
        "name": "Frangipane",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Pastry dough",
                "quantity": 400,
                "unit":"grams"
            },
            {
                "ingredient": "Egg",
                "quantity": 6
            },
            {
                "ingredient": "Ground almonds",
                "quantity": 500,
                "unit": "grams"
            },
            {
                "ingredient": "Butter",
                "quantity": 500,
                "unit": "grams"
            },
            {
                "ingredient": "Icing sugar",
                "quantity": 500,
                "unit":"grams"
            }
        ],
        "time": 60,
        "description":"Prepare the frangipane: Mix together the sugar, ground almonds, butter and eggs. Spread half of the pastry dough in a pie dish. Fill with frangipane and top with the remaining puff pastry. Bake for 30 minutes",
        "appliance": "Oven",
        "ustensils":["rouleau à patisserie","fouet"]
    }
]