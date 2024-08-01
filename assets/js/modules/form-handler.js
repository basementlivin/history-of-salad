export function initFormHandler() {
    const handleSubmit = (event) => {
        event.preventDefault();
      
        const myForm = event.target;
        const formData = new FormData(myForm);
        
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        })
          .then(() => {
              const successMessage = document.createElement("div");
              successMessage.className = "alert alert--success";
              successMessage.textContent = "Got it, thanks!";
              myForm.appendChild(successMessage);
          })
          .catch((error) => {
              const errorMessage = document.createElement("div");
              errorMessage.className = "alert alert--failure";
              errorMessage.textContent = `Error: ${error}`;
              myForm.appendChild(errorMessage);
          });
      };
      
      document
        .querySelector("form")
        .addEventListener("submit", handleSubmit);      
}
