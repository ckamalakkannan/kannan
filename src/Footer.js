import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'

import { Navbar, Nav,Form,FormControl } from 'react-bootstrap';
import './assets/css/fontawesome.css'
import  './assets/css/site.css'
import  './assets/css/lightbox.css'

class Footer extends React.Component
{
  render()
  {
    return (
<footer class="footer">
    <div class="container bottom_border">
      <div class="row">
        <div class=" col-sm-4 col-md col-sm-4  col-12 col">
          <h5 class="headin5_amrc col_white_amrc pt2">About us</h5>

          <p class="mb10">Teach and inspire.Virtual, at your convenience.</p>
          <p>
            <i class="fa fa-location-arrow"></i> 12 Suite Name, Place Name, City 55555 <br />
            <i class="fa fa-phone"></i> +1-999123 1234 <br />
            <i class="fa fa fa-envelope"></i> info@example.com
          </p>


        </div>


        <div class=" col-sm-4 col-md  col-6 col">
          <h5 class="headin5_amrc col_white_amrc pt2">Resources</h5>

          <ul class="footer_ul_amrc">
            <li><a href="#">Link1</a></li>
            <li><a href="#">Link2</a></li>
            <li><a href="#">Link3</a></li>
            <li><a href="#">Link4</a></li>
            <li><a href="#">Link5</a></li>
            <li><a href="#">Link6</a></li>
          </ul>

        </div>


        <div class=" col-sm-4 col-md  col-6 col">
          <h5 class="headin5_amrc col_white_amrc pt2">Press/Blog</h5>

          <ul class="footer_ul_amrc">
            <li><a href="#">Link1</a></li>
            <li><a href="#">Link2</a></li>
            <li><a href="#">Link3</a></li>
            <li><a href="#">Link4</a></li>
            <li><a href="#">Link5</a></li>
            <li><a href="#">Link6</a></li>
          </ul>

        </div>
      </div>
    </div>

<div class="container">
      <ul class="foote_bottom_ul_amrc">
        <li><a href="#">Learn</a></li>
        <li><a href="#">Teach</a></li>
        <li><a href="#">Enterprises</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Support</a></li>
      </ul>
      <p class="text-center">Copyright @2020 | Developed by <a href="#">Evince</a></p>

      <ul class="social_footer_ul">
        <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
      </ul>
    </div>
  </footer>

    )
  }
}
export default Footer;
