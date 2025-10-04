document.addEventListener("DOMContentLoaded", () => {
  const subscribeForm = document.getElementById("subscribeForm");
  const confirmBox = document.getElementById("confirmationMessage");

  if (subscribeForm) {
    subscribeForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const plan = document.querySelector('input[name="subscription"]:checked')?.value;

      if (!name || !email || !plan) {
        alert("Please fill out all fields.");
        return;
      }

      const subscriber = {
        name,
        email,
        plan,
        subscribedAt: new Date().toISOString()
      };

      const existingSubscribers = JSON.parse(localStorage.getItem("snackSubscribers") || "[]");
      existingSubscribers.push(subscriber);
      localStorage.setItem("snackSubscribers", JSON.stringify(existingSubscribers));

      confirmBox.textContent = `Thanks for subscribing, ${name}! You chose the "${plan}" plan.`;

      // OPTIONAL: Send to server to append to subscriber.txt
      fetch("appendSubscriber.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(subscriber)
      }).catch(err => console.error("Failed to append subscriber to file:", err));

      subscribeForm.reset();
    });
  }

  // RECIPES LOADING AND DISPLAY
  const recipesContainer = document.getElementById("recipesContainer");
  if (recipesContainer) {
    fetch("snacks.txt")
      .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.text();
      })
      .then(txtText => {
        const recipes = parseTXT(txtText);
        displayRecipes(recipes);
      })
      .catch(error => {
        recipesContainer.textContent = "Failed to load recipes.";
        console.error(error);
      });
  }

  function displayRecipes(recipes) {
    if (!recipes.length) {
      recipesContainer.textContent = "No recipes found.";
      return;
    }

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

  function parseTXT(text) {
    const lines = text.trim().split('\n');
    if (lines.length < 2) return [];

    const headers = lines[0].split(',');

    return lines.slice(1).map(line => {
      const columns = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);
      let recipe = {};
      headers.forEach((header, index) => {
        recipe[header.trim()] = columns && columns[index]
          ? columns[index].replace(/^"|"$/g, '')
          : "";
      });
      return recipe;
    });
  }

  const lastModifiedSpan = document.getElementById("lastModified");
  if (lastModifiedSpan) {
    lastModifiedSpan.textContent = document.lastModified;
  }
});
