document.addEventListener("DOMContentLoaded", function () {
  let storedData = localStorage.getItem("contactMessages");
  console.log(storedData);
  let feedbacks = [];

  if (storedData) {
    feedbacks = JSON.parse(storedData);
  }

  const groupedFeedbacks = feedbacks.reduce((acc, feedback) => {
    if (!acc[feedback.email]) {
      acc[feedback.email] = {
        firstName: feedback.firstName,
        lastName: feedback.lastName,
        email: feedback.email,
        messages: [],
      };
    }
    acc[feedback.email].messages.push({
      message: feedback.message,
      timestamp: feedback.timestamp,
    });
    return acc;
  }, {});

  const groupedFeedbacksArray = Object.values(groupedFeedbacks);

  function createFeedbackCards(cardsContainerId, feedbackData) {
    const cardsContainer = document.getElementById(cardsContainerId);
    cardsContainer.innerHTML = ""; // Clear existing content

    feedbackData.forEach((feedback) => {
      let firstTwoMessagesHtml = feedback.messages
        .slice(0, 2) // Only take the first two messages
        .map(
          (msg) => `
              <p class="card-text">${msg.message}</p>
              <p class="card-text">${msg.timestamp}</p>
            `
        )
        .join("");

      let readMoreButtonHtml = "";

      if (feedback.messages.length > 2) {
        readMoreButtonHtml = `
            <button class="btn btn-primary read-more-btn" data-feedback='${JSON.stringify(
              feedback.messages.slice(2) // Exclude the first two messages from additional messages
            )}'>Read More</button>
          `;
      }

      cardsContainer.innerHTML += `
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
              <div class="card-body">
                <h4 class="card-title">${feedback.firstName}</h4>
                <h5 class="card-title">${feedback.lastName}</h5>
                <p class="card-text">${feedback.email}</p>
                ${firstTwoMessagesHtml}
                ${readMoreButtonHtml}
              </div>
            </div>
          </div>
        `;
    });

    document.querySelectorAll(".read-more-btn").forEach((button) => {
      button.addEventListener("click", function () {
        const additionalMessages = JSON.parse(
          this.getAttribute("data-feedback")
        );
        const modalBody = document.getElementById("feedbackModalBody");
        modalBody.innerHTML = additionalMessages
          .map(
            (msg) => `
                <p class="card-text">${msg.message}</p>
                <p class="card-text">${msg.timestamp}</p>
              `
          )
          .join("");
        const feedbackModal = new bootstrap.Modal(
          document.getElementById("feedbackModal")
        );
        feedbackModal.show();
      });
    });
  }

  createFeedbackCards("feedback-cards-top", groupedFeedbacksArray.slice(0, 3));
  createFeedbackCards(
    "feedback-cards-bottom",
    groupedFeedbacksArray.slice(3, 6)
  );

  // Handle closing modal and redirecting to home page
  const closeModalButton = document.querySelector(".modal .btn-close");
  if (closeModalButton) {
    closeModalButton.addEventListener("click", function () {
      window.location.href = "index.html"; // Replace with your home page URL
    });
  }
});
