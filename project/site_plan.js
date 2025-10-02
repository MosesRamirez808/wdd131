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

      // Get existing subscribers from localStorage or start empty
      const existingSubscribers = JSON.parse(localStorage.getItem("snackSubscribers") || "[]");

      // Add new subscriber
      existingSubscribers.push(subscriber);

      // Save updated array back to localStorage
      localStorage.setItem("snackSubscribers", JSON.stringify(existingSubscribers));

      confirmBox.textContent = `Thanks for subscribing, ${name}! You chose the "${plan}" plan.`;

      // Prepare CSV content with all subscribers
      const csvHeader = "Name,Email,Plan,SubscribedAt\n";
      const csvRows = existingSubscribers.map(sub => 
        `"${sub.name}","${sub.email}","${sub.plan}","${sub.subscribedAt}"`
      ).join("\n");
      const csvContent = csvHeader + csvRows;

      // Create a Blob and download
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      
      // Use a filename with timestamp so it doesn't overwrite old downloads
      link.download = `subscribers_${Date.now()}.csv`;
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      subscribeForm.reset();
    });
  }

  // --- RECIPES LOADING AND DISPLAY ---
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

  // --- DISPLAY RECIPES ---
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

  // --- PARSE TXT (Stub) ---
  // You must customize this parser according to your snacks.txt format
  function parseTXT(text) {
  
    return [];
  }

  // --- LAST MODIFIED SECTION ---
  const lastModifiedSpan = document.getElementById("lastModified");
  if (lastModifiedSpan) {
    lastModifiedSpan.textContent = document.lastModified;
  }
});
function parseTXT(text) {
  // Split into lines
  const lines = text.trim().split('\n');

  if (lines.length < 2) return []; // No data

  // Get headers from first line
  const headers = lines[0].split(',');

  // Parse each subsequent line into an object
  const recipes = lines.slice(1).map(line => {
    // Split line into columns - simple split by comma, improve if you have commas inside quotes
    const columns = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);

    let recipe = {};
    headers.forEach((header, index) => {
      if (columns && columns[index]) {
        // Remove possible surrounding quotes from values
        recipe[header.trim()] = columns[index].replace(/^"|"$/g, '');
      } else {
        recipe[header.trim()] = "";
      }
    });
    return recipe;
  });

  return recipes;
}
