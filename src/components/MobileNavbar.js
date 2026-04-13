import React from 'react'

export default function MobileNavbar() {
  return (
   <>
   {/* <nav class="navbar bg-body-tertiary fixed-top mobile"> */}
    <nav className="navbar  fixed-top d-lg-none" style={{ backgroundColor: "#ffff19" }}>
  <div class="container-fluid">
     <a class="navbar-brand" href="#"><img
            src="https://homepride.in/wp-content/uploads/2020/07/logo.webp"
            height="60px" alt /></a>
    <span class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" style={{fontSize:"12px"}}></span>
    </span>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        {/* <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5> */}
         <a class="navbar-brand" href="#"><img
            src="https://homepride.in/wp-content/uploads/2020/07/logo.webp"
            height="50px" alt /></a>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        {/* <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul> */}

        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">

            <li class="nav-item dropdown position-static">
              <a class="nav-link dropdown-toggle" href="#"
                data-bs-toggle="dropdown">
                Discover solution
              </a>

              <div class="dropdown-menu mega-menu shadow">
                <div class="container py-1">
                  <div class="row g-4">

                    {/* <!-- Card --> */}
                    <div class="col-lg-2 col-md-4 col-6">
                      <div class="tile-card">
                        <img
                          src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg"
                          class="img-fluid" />
                        <p>Laying Tiles In Bathroom</p>
                      </div>
                    </div>

                    <div class="col-lg-2 col-md-4 col-6">
                      <div class="tile-card">
                        <img
                          src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg" />
                        <p>Laying Tiles In Kitchen</p>
                      </div>
                    </div>

                    <div class="col-lg-2 col-md-4 col-6">
                      <div class="tile-card">
                        <img
                          src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg" />
                        <p>Laying Tiles On Exterior Wall</p>
                      </div>
                    </div>

                    {/* <!-- Active Card --> */}
                    <div class="col-lg-2 col-md-4 col-6">
                      <div class="tile-card active">
                        <img
                          src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg" />
                        <p>Tiling On Gypsum Board</p>
                      </div>
                    </div>

                    <div class="col-lg-2 col-md-4 col-6">
                      <div class="tile-card">
                        <img
                          src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg" />
                        <p>Waterproofing A Terrace</p>
                      </div>
                    </div>

                    <div class="col-lg-2 col-md-4 col-6">
                      <div class="tile-card">
                        <img
                          src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg" />
                        <p>Filling Grout In Large Area</p>
                      </div>
                    </div>

                    <div class="col-lg-2 col-md-4 col-6">
                      <div class="tile-card">
                        <img
                          src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg" />
                        <p>Repairing Marble Cracks</p>
                      </div>
                    </div>

                    <div class="col-lg-2 col-md-4 col-6">
                      <div class="tile-card">
                        <img
                          src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg" />
                        <p>Sealing Granite Countertops</p>
                      </div>
                    </div>

                    <div class="col-lg-2 col-md-4 col-6">
                      <div class="tile-card">
                        <img
                          src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg" />
                        <p>Applying Wall Plaster</p>
                      </div>
                    </div>

                    <div class="col-lg-2 col-md-4 col-6">
                      <div class="tile-card">
                        <img
                          src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg" />
                        <p>Removing Grout Haze</p>
                      </div>
                    </div>

                    <div class="col-lg-2 col-md-4 col-6">
                      <div class="tile-card">
                        <img
                          src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg" />
                        <p>Installing Large Format Tiles</p>
                      </div>
                    </div>

                    <div class="col-lg-2 col-md-4 col-6">
                      <div class="tile-card">
                        <img
                          src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg" />
                        <p>Using Tile Leveling System</p>
                      </div>
                    </div>

                  </div>

                  {/* <!-- Button --> */}
                  <div class="text-start mt-4">
                    <button class="btn btn-danger px-4 py-2 rounded-pill">
                      View All Solutions
                    </button>
                  </div>
                </div>
              </div>

            </li>

            {/* <!-- Mega Menu --> */}
            <li class="nav-item dropdown position-static">
              <a class="nav-link dropdown-toggle" href="#"
                data-bs-toggle="dropdown">
                Products
              </a>

              <div class="dropdown-menu mega-menu shadow">
                <div class="container">
                  <div class="row">

                    {/* <!-- Tabs --> */}
                    <div class="col-md-3">
                      <ul class="nav nav-tabs flex-column" id="megaTabs"
                        role="tablist">
                        <li class="nav-item">
                          <button class="nav-link active" data-bs-toggle="tab"
                            data-bs-target="#tab1">
                            Tile & Stone Adhesives
                          </button>
                        </li>
                        <li class="nav-item">
                          <button class="nav-link" data-bs-toggle="tab"
                            data-bs-target="#tab2">
                            Water Proofing
                          </button>
                        </li>
                        <li class="nav-item">
                          <button class="nav-link" data-bs-toggle="tab"
                            data-bs-target="#tab3">
                            Grouts
                          </button>
                        </li>
                        <li class="nav-item">
                          <button class="nav-link" data-bs-toggle="tab"
                            data-bs-target="#tab4">
                            Wall Care
                          </button>
                        </li>
                        <li class="nav-item">
                          <button class="nav-link" data-bs-toggle="tab"
                            data-bs-target="#tab5">
                            Cleaner
                          </button>
                        </li>
                        <li class="nav-item">
                          <button class="nav-link" data-bs-toggle="tab"
                            data-bs-target="#tab6">
                            Marble & Stone Care
                          </button>
                        </li>
                        <li class="nav-item">
                          <button class="nav-link" data-bs-toggle="tab"
                            data-bs-target="#tab7">
                            Tools
                          </button>
                        </li>
                      </ul>
                    </div>

                    {/* <!-- Tab Content --> */}
                    <div class="col-md-9">
                      <div class="tab-content">

                        {/* <!-- Tab 1 --> */}
                        <div class="tab-pane fade show active" id="tab1">
                          <div class="container py-2">
                            <div class="row g-4">

                              {/* <!-- Product Item --> */}
                              <div class="col-lg-3 col-md-6 col-12">
                                <div class="product-card">
                                  <img
                                    src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg"
                                    alt />
                                  <div class="product-title">HOME PRIDE 969 TILE
                                    ADHESIVE</div>
                                </div>
                              </div>

                              <div class="col-lg-3 col-md-6 col-12">
                                <div class="product-card">
                                  <img
                                    src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg"
                                    alt />
                                  <div class="product-title">HOME PRIDE 1000
                                    TILE ADHESIVE</div>
                                </div>
                              </div>

                              <div class="col-lg-3 col-md-6 col-12">
                                <div class="product-card">
                                  <img
                                    src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg"
                                    alt />
                                  <div class="product-title">HOME PRIDE 999 TILE
                                    ADHESIVE</div>
                                </div>
                              </div>

                              <div class="col-lg-3 col-md-6 col-12">
                                <div class="product-card">
                                  <img
                                    src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg"
                                    alt />
                                  <div class="product-title">HOME PRIDE 1001
                                    TILE ADHESIVE</div>
                                </div>
                              </div>

                              <div class="col-lg-3 col-md-6 col-12">
                                <div class="product-card">
                                  <img
                                    src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg"
                                    alt />
                                  <div class="product-title">HOME PRIDE 1002
                                    TILE ADHESIVE</div>
                                </div>
                              </div>

                              <div class="col-lg-3 col-md-6 col-12">
                                <div class="product-card">
                                  <img
                                    src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg"
                                    alt />
                                  <div class="product-title">HOME PRIDE 1011
                                    GLASS MOSAIC ADHESIVE / MULTIPURPOSE</div>
                                </div>
                              </div>

                              <div class="col-lg-3 col-md-6 col-12">
                                <div class="product-card">
                                  <img
                                    src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg"
                                    alt />
                                  <div class="product-title">HOME PRIDE 1021
                                    MULTIPURPOSE ADHESIVE</div>
                                </div>
                              </div>

                              <div class="col-lg-3 col-md-6 col-12">
                                <div class="product-card">
                                  <img
                                    src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg"
                                    alt />
                                  <div class="product-title">HOME PRIDE 1031
                                    MULTIPURPOSE ADHESIVE</div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                        {/* <!-- Tab 2 --> */}
                        <div class="tab-pane fade" id="tab2">
                          <div class="container py-2">
                            <div class="row g-4">

                              {/* <!-- Product Item --> */}
                              <div class="col-lg-3 col-md-6 col-12">
                                <div class="product-card">
                                  <img
                                    src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg"
                                    alt />
                                  <div class="product-title">HOME PRIDE 969 TILE
                                    ADHESIVE</div>
                                </div>
                              </div>

                              <div class="col-lg-3 col-md-6 col-12">
                                <div class="product-card">
                                  <img
                                    src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg"
                                    alt />
                                  <div class="product-title">HOME PRIDE 1000
                                    TILE ADHESIVE</div>
                                </div>
                              </div>

                              <div class="col-lg-3 col-md-6 col-12">
                                <div class="product-card">
                                  <img
                                    src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg"
                                    alt />
                                  <div class="product-title">HOME PRIDE 999 TILE
                                    ADHESIVE</div>
                                </div>
                              </div>

                              <div class="col-lg-3 col-md-6 col-12">
                                <div class="product-card">
                                  <img
                                    src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg"
                                    alt />
                                  <div class="product-title">HOME PRIDE 1001
                                    TILE ADHESIVE</div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>

                        {/* <!-- Tab 3 --> */}
                        <div class="tab-pane fade" id="tab3">
                          <div class="container py-2">
                            <div class="row g-4">

                              {/* <!-- Product Item --> */}
                              <div class="col-lg-3 col-md-6 col-12">
                                <div class="product-card">
                                  <img
                                    src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg"
                                    alt />
                                  <div class="product-title">HOME PRIDE 969 TILE
                                    ADHESIVE</div>
                                </div>
                              </div>

                              <div class="col-lg-3 col-md-6 col-12">
                                <div class="product-card">
                                  <img
                                    src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg"
                                    alt />
                                  <div class="product-title">HOME PRIDE 1000
                                    TILE ADHESIVE</div>
                                </div>
                              </div>

                              <div class="col-lg-3 col-md-6 col-12">
                                <div class="product-card">
                                  <img
                                    src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg"
                                    alt />
                                  <div class="product-title">HOME PRIDE 999 TILE
                                    ADHESIVE</div>
                                </div>
                              </div>

                              <div class="col-lg-3 col-md-6 col-12">
                                <div class="product-card">
                                  <img
                                    src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg"
                                    alt />
                                  <div class="product-title">HOME PRIDE 1001
                                    TILE ADHESIVE</div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                        {/* <!-- Tab 4 --> */}
                        <div class="tab-pane fade" id="tab4">
                          <div class="container py-2">
                            <div class="row g-4">

                              {/* <!-- Product Item --> */}
                              <div class="col-lg-3 col-md-6 col-12">
                                <div class="product-card">
                                  <img
                                    src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg"
                                    alt />
                                  <div class="product-title">HOME PRIDE 969 TILE
                                    ADHESIVE</div>
                                </div>
                              </div>

                              <div class="col-lg-3 col-md-6 col-12">
                                <div class="product-card">
                                  <img
                                    src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg"
                                    alt />
                                  <div class="product-title">HOME PRIDE 1000
                                    TILE ADHESIVE</div>
                                </div>
                              </div>

                              <div class="col-lg-3 col-md-6 col-12">
                                <div class="product-card">
                                  <img
                                    src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg"
                                    alt />
                                  <div class="product-title">HOME PRIDE 999 TILE
                                    ADHESIVE</div>
                                </div>
                              </div>

                              <div class="col-lg-3 col-md-6 col-12">
                                <div class="product-card">
                                  <img
                                    src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg"
                                    alt />
                                  <div class="product-title">HOME PRIDE 1001
                                    TILE ADHESIVE</div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>

                        {/* <!-- Tab 5 --> */}
                        <div class="tab-pane fade" id="tab5">
                          <div class="container py-2">
                            <div class="row g-4">

                              {/* <!-- Product Item --> */}
                              <div class="col-lg-3 col-md-6 col-12">
                                <div class="product-card">
                                  <img
                                    src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg"
                                    alt />
                                  <div class="product-title">HOME PRIDE 969 TILE
                                    ADHESIVE</div>
                                </div>
                              </div>

                              <div class="col-lg-3 col-md-6 col-12">
                                <div class="product-card">
                                  <img
                                    src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg"
                                    alt />
                                  <div class="product-title">HOME PRIDE 1000
                                    TILE ADHESIVE</div>
                                </div>
                              </div>

                              <div class="col-lg-3 col-md-6 col-12">
                                <div class="product-card">
                                  <img
                                    src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg"
                                    alt />
                                  <div class="product-title">HOME PRIDE 999 TILE
                                    ADHESIVE</div>
                                </div>
                              </div>

                              <div class="col-lg-3 col-md-6 col-12">
                                <div class="product-card">
                                  <img
                                    src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg"
                                    alt />
                                  <div class="product-title">HOME PRIDE 1001
                                    TILE ADHESIVE</div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>

                        {/* <!-- Tab 6 --> */}
                        <div class="tab-pane fade" id="tab6">
                          <div class="container py-2">
                            <div class="row g-4">

                              {/* <!-- Product Item --> */}
                              <div class="col-lg-3 col-md-6 col-12">
                                <div class="product-card">
                                  <img
                                    src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg"
                                    alt />
                                  <div class="product-title">HOME PRIDE 969 TILE
                                    ADHESIVE</div>
                                </div>
                              </div>

                              <div class="col-lg-3 col-md-6 col-12">
                                <div class="product-card">
                                  <img
                                    src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg"
                                    alt />
                                  <div class="product-title">HOME PRIDE 1000
                                    TILE ADHESIVE</div>
                                </div>
                              </div>

                              <div class="col-lg-3 col-md-6 col-12">
                                <div class="product-card">
                                  <img
                                    src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg"
                                    alt />
                                  <div class="product-title">HOME PRIDE 999 TILE
                                    ADHESIVE</div>
                                </div>
                              </div>

                              <div class="col-lg-3 col-md-6 col-12">
                                <div class="product-card">
                                  <img
                                    src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg"
                                    alt />
                                  <div class="product-title">HOME PRIDE 1001
                                    TILE ADHESIVE</div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>

                        {/* <!-- Tab 7 --> */}
                        <div class="tab-pane fade" id="tab7">
                          <div class="container py-2">
                            <div class="row g-4">

                              {/* <!-- Product Item --> */}
                              <div class="col-lg-3 col-md-6 col-12">
                                <div class="product-card">
                                  <img
                                    src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg"
                                    alt />
                                  <div class="product-title">HOME PRIDE 969 TILE
                                    ADHESIVE</div>
                                </div>
                              </div>

                              <div class="col-lg-3 col-md-6 col-12">
                                <div class="product-card">
                                  <img
                                    src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg"
                                    alt />
                                  <div class="product-title">HOME PRIDE 1000
                                    TILE ADHESIVE</div>
                                </div>
                              </div>

                              <div class="col-lg-3 col-md-6 col-12">
                                <div class="product-card">
                                  <img
                                    src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg"
                                    alt />
                                  <div class="product-title">HOME PRIDE 999 TILE
                                    ADHESIVE</div>
                                </div>
                              </div>

                              <div class="col-lg-3 col-md-6 col-12">
                                <div class="product-card">
                                  <img
                                    src="https://homepride.in/wp-content/uploads/2026/02/tile-adhesive-969.jpg"
                                    alt />
                                  <div class="product-title">HOME PRIDE 1001
                                    TILE ADHESIVE</div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdown2"
                role="button" data-bs-toggle="dropdown">
                Tools
              </a>
              <ul class="dropdown-menu">

                <li><a class="dropdown-item" href="#">Calculate Adhesive
                    Coverage</a></li>
                <li><a class="dropdown-item" href="#">Calculate Joint Filler
                    Coverage</a></li>
                <li><a class="dropdown-item" href="#">Tile Adhesive
                    Recommender</a></li>
                <li><a class="dropdown-item" href="#">Tile Joint
                    Visualizer</a></li>
                <li><a class="dropdown-item" href="#">Wall Putty
                    Calculator</a></li>
                <li><a class="dropdown-item" href="#">Wall Plaster
                    Calculator</a></li>
                <li><a class="dropdown-item" href="#">Visit Detail Page</a></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdown3"
                role="button" data-bs-toggle="dropdown">
                Colour Shades
              </a>
              <ul class="dropdown-menu">

                <li><a class="dropdown-item" href="#">Calculate Adhesive
                    Coverage</a></li>
                <li><a class="dropdown-item" href="#">Calculate Joint Filler
                    Coverage</a></li>
                <li><a class="dropdown-item" href="#">Tile Adhesive
                    Recommender</a></li>
                <li><a class="dropdown-item" href="#">Tile Joint
                    Visualizer</a></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdown3"
                role="button" data-bs-toggle="dropdown">
                Join Us
              </a>
              <ul class="dropdown-menu">

                <li><a class="dropdown-item" href="#">Calculate Adhesive
                    Coverage</a></li>
                <li><a class="dropdown-item" href="#">Calculate Joint Filler
                    Coverage</a></li>
                <li><a class="dropdown-item" href="#">Tile Adhesive
                    Recommender</a></li>
                <li><a class="dropdown-item" href="#">Tile Joint
                    Visualizer</a></li>
              </ul>
            </li>

            <li class="nav-item">
              <a href="#">
                <button type="button" class="btn btn-danger"> Contact</button>

              </a>
            </li>

          </ul>
      </div>
    </div>
  </div>
</nav>
   </>
  )
}
