document.addEventListener("DOMContentLoaded", () => {
  // --- SUBSCRIPTION FORM HANDLING ---
  const subscribeForm = document.getElementById("subscribeForm");
  const confirmBox = document.getElementById("confirmationMessage");

  if (subscribeForm) {
    subscribeForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const plan = document.querySelector('input[name="plan"]:checked')?.value;

      if (!email || !plan) {
        alert("Please fill out all fields.");
        return;
      }

      const subscriber = {
        email,
        plan,
        subscribedAt: new Date().toISOString()
      };

      // Store subscriber in localStorage (can extend to save multiple later)
      localStorage.setItem("snackSubscriber", JSON.stringify(subscriber));

      confirmBox.textContent = `Thanks for subscribing! You chose the "${plan}" plan.`;
      subscribeForm.reset();
    });
  }

  // --- RECIPES LOADING AND DISPLAY ---
  const recipesContainer = document.getElementById("recipesContainer");
  if (recipesContainer) {
    fetch("snacks.csv")
      .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.text();
      })
      .then(csvText => {
        const recipes = parseCSV(csvText);
        displayRecipes(recipes);
      })
      .catch(error => {
        recipesContainer.textContent = "Failed to load recipes.";
        console.error(error);
      });
  }

  // --- FUNCTIONS FOR CSV PARSING AND DISPLAY ---
  function parseCSV(text) {
    const lines = text.trim().split("\n");
    const headers = lines[0].split(",");
    const data = lines.slice(1).map(line => {
      // Basic CSV parsing, does not handle commas inside quotes
      const values = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);
      let obj = {};
      headers.forEach((header, i) => {
        obj[header.trim()] = values[i]?.replace(/(^"|"$)/g, "");
      });
      return obj;
    });
    return data;
  }

  function displayRecipes(recipes) {
    if (!recipes.length) {
      recipesContainer.textContent = "No recipes found.";
      return;
    }

    // Clear existing content just in case
    recipesContainer.innerHTML = "";

    recipes.forEach(recipe => {
      const recipeDiv = document.createElement("div");
      recipeDiv.classList.add("recipe");

      recipeDiv.innerHTML = `
        <h3>${recipe.Name}</h3>
        <p><strong>Ingredients:</strong> ${recipe.Ingredients}</p>
        <p><strong>Instructions:</strong> ${recipe.Instructions}</p>
      `;

      recipesContainer.appendChild(recipeDiv);
    });
  }
});
