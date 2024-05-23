document.addEventListener("DOMContentLoaded", function() {
    // Check if the URL contains a query parameter indicating the email was sent successfully
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("success") && urlParams.get("success") === "true") {
      // Create a message box element
      var messageBox = document.createElement("div");
      messageBox.textContent = "Email sent successfully.";
      messageBox.style.backgroundColor = "lightgreen";
      messageBox.style.padding = "10px";
      messageBox.style.marginBottom = "20px";
  
      // Add the message box to the document
      document.getElementById("messageBox").appendChild(messageBox);
    }
  });
  