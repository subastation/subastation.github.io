const facts = [
    "The shortest war in history lasted only 38 minutes",
    "Cows have best friends",
    "There is a town in Alaska with 217 residents and everyone lives in the same building",
    "A group of flamingos is called a flamboyance",
    "A jellyfish is made up of over 95% water",
    "A small child could swim through the veins of a blue whale",
    "The world’s largest grand piano was built by a 15-year-old in New Zealand",
    "Penguins have an organ above their eyes that converts seawater to freshwater",
    "The longest word in English has 189,819 letters",
    "A group of hedgehogs is called a prickle",
    "A cockroach can live for several weeks without its head",
    "The tallest mountain on Earth is not Mount Everest",
    "There is a city called Rome on every continent",
    "The largest snowflake on record measured 15 inches wide and 8 inches thick",
    "The longest time between two twins being born is 87 days",
    "The world's largest snow maze is located in Canada and covers over 10 acres",
    "The world's largest pyramid is not in Egypt",
    "The oldest piece of chewing gum is over 9,000 years old",
    "A group of owls is called a parliament",
    "The world's largest mushroom is over 2,200 acres wide",
    "The longest wedding veil was longer than 63 football fields",
    "A crocodile can't stick its tongue out",
    "The shortest commercial flight lasts only 1.5 minutes",
    "A single cloud can weigh over 1 million pounds",
    "The largest ever hailstone recorded was the size of a football",
    "The only letter that doesn't appear in any U.S. state name is the letter 'Q'",
    "The oldest living thing on Earth is over 4,800 years old"
  ];
  
  const factsBar = document.createElement("div");
  factsBar.classList.add("facts-bar");
  document.body.appendChild(factsBar);
  
  let index = 0;
  setInterval(() => {
    factsBar.textContent = facts[index];
    index = (index + 1) % facts.length;
  }, 5000);
  
  const marquee = document.createElement("marquee");
  marquee.textContent = facts.join(" — ");
  marquee.classList.add("facts-scroll");
  factsBar.appendChild(marquee);
  