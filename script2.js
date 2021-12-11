const arr = [
  "- Heat a medium-large saucepan over medium heat.",
  "- Add 2 tspns of oil and 5 carlic cloves, cook until golden, about 2 minutes",
  "- Add 1/4 cup water, 2 cans of crushed tomates, and salt and season with black pepper to taste.",
  "- Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes",
  "- Stir in 1/4 cup roughly chopped fresh basil, salt and pepper as needed.",
];

function marinaraSauce(a, cookName) {
  for (let i = 0; i < a.length; i++) {
    console.log("Hello " + cookName + "!");
    console.log(a[i]);
  }
}

marinaraSauce(arr, "Josh");
