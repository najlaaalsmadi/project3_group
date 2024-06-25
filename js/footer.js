document.addEventListener("DOMContentLoaded", function() {
    generateFooter();
  });
  
  function generateFooter() {
    const footerHTML = `
<!-- Footer -->
<footer class="text-center text-lg-start" style="  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);">

    <section class="text-center text-lg-start" style="padding: 10px;  ">
        <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 class="text-uppercase fw-bold mb-4">
                        <i class="fas fa-gem me-3"></i>EduFlex HR

                    </h6>
                    <p>
                       We are dedicated to providing the best HR solutions for schools around the country.
                    </p>
                </div>
                 
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 class="text-uppercase fw-bold mb-4">
                        Pages
                    </h6>
                    <p><a href="home.html" class="text-reset">Home</a></p>
                    <p><a href="about.html" class="text-reset">About</a></p>
                    <p><a href="contact.html" class="text-reset">Contact</a></p>
                    <p><a href="policies.html" class="text-reset">Policies</a></p>
                </div>
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                    <p><i class="fas fa-home me-3"></i> Jordan, Irbid, Al-Hashemi Street</p>
                    <p><i class="fas fa-envelope me-3"></i> HR@gmail.com</p>
                    <p><i class="fas fa-phone me-3"></i> +962 792 567 88</p>
                    <p><i class="fas fa-print me-3"></i> +962 792 567 89</p>
                </div>
            </div>
        </div>
    </section>

    <div class="text-center p-4" >
        © 2024 Copyright:
        <a href="#" class="text-reset fw-bold">HR.com</a>
    </div>
</footer>
<!-- Footer -->

    `;
  
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }
  