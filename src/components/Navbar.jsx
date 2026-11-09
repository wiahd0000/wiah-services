import React from 'react'
import { useEffect } from 'react';
import {useForm} from "react-hook-form";

function Navbar() {

  // form validation
  const{register,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm();

  const onSubmit = (data) =>{
    alert("Congrats, Submit Sucussfully")
    reset();
  };


  // navbar validation
  useEffect(() => {
  const menus = document.getElementById("menus");
  const btn = document.getElementById("btnburger");

  if (!menus || !btn) return;

  const toggleMenu = () => {
    menus.classList.toggle("active");
  };

  const closeMenu = () => {
    menus.classList.remove("active");
  };

  btn.addEventListener("click", toggleMenu);

  const links = menus.querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  return () => {
    btn.removeEventListener("click", toggleMenu);

    links.forEach((link) => {
      link.removeEventListener("click", closeMenu);
    });
  };
}, []);
  return (
    
    <>
   <div className="main">
     <div className="navbar-container">
      <h1 className='logo'>Wiah</h1>
<nav className='menus' id='menus'>
  <li><a href="#home">Corpate</a></li>
  <li><a href="#service">Our- Services</a></li>
  <li><a href="#process">Process</a></li>
  <li><a href="#touch">Get in touch</a></li>
</nav>

<span id='btnburger' ><i className="fa-solid fa-bars"></i></span>

    </div>

    {/* home secction */}
    <div className="home" id='home'>
    <div className="home-inside">
       <h2>Elevating Corporate Environments Through Strategic Decoration</h2>
       <p>Professional Workspace transformation & event curtion</p>

       <div className="home-btns">
        <span className='btn-home-one'><a href="https://wiah.netlify.app/" target='blank'>View Portfolia</a></span>

       <span className='btn-home-two'><a href="https://wa.me/message/NOAHTKSB5PMRF1" target='blank'>Book Consultation</a></span>
       </div>
    </div>

    </div>
    {/* home section ending */}

{/* beginning of service section */}
    <div className="service" id='service'>
      <h3>Commercial Decoration Solutions Built Around Your Brand</h3>
      <div className="service-inside">
<div className="service-box">
  <h4>Workspace for styling</h4> 
  <p>- Office layout setup</p>
  <p>- Seasoning themes</p>
  <button>learn more</button>
</div>

<div className="service-box">
  <h4>Corporate Events</h4> 
  <p>- Office layout setup</p>
  <p>- Product launches</p>
  <button>learn more</button>
</div>

<div className="service-box">
  <h4>Biephille Design</h4> 
  <p>- Plant euration</p>
  <p>- Manitenance plane</p>
  <button>learn more</button>
</div>
      </div>
    </div>
    {/* ending of servicve section */}

    {/* beginning of process section */}
    <div className="process" id='process'>
<h5>Selected Corporate Case</h5>
<div className="process-boxes">

<div className="process-box">
  <img src="https://i.pinimg.com/originals/22/27/09/22270917338f5400af1f91ee3bf46863.jpg" alt="" />
  <div className="box-side">
    <h6>Financial Firm Hub</h6>
    <button>view Case Study</button>
  </div>
</div>

<div className="process-box">
  <img src="https://fancyhouse-design.com/wp-content/uploads/2024/08/A-luxurious-kitchen-features-high-gloss-ebony-cabinets-with-integrated-handles-creating-a-sleek-and-sophisticated-atmosphere.jpg" alt="" />
  <div className="box-side">
    <h6>Modern Palace</h6>
    <button>view Case Study</button>
  </div>
</div>

<div className="process-box">
  <img src="https://i.pinimg.com/originals/85/fd/91/85fd91e839d130b5f6fa1efdd5b61451.jpg" alt="" />
  <div className="box-side">
    <h6>Dinning-room
    </h6>
    <button>view Case Study</button>
  </div>
</div>

</div>
    </div>

    {/* ending of process section */}
    {/* process-section part two */}
    <div className="process-two">
      <h4>From Concept Blueprint to On-site Installation</h4>

<div className="process-two-container">
   <div className="process-two-box">
        <span>Discovery Brief</span>
        <p>We learn your brand goals and budget</p>
      </div>

 <div className="process-two-box">
        <span>3D Moodboards</span>
        <p>We render spatial layouts for your direct approval.</p>
      </div>

 <div className="process-two-box">
        <span>Execution & Setup</span>
        <p>White-glove installation with zero workflow delays</p>
      </div>
</div>
     {/* process-form */}
    <div className='process-parent' id='touch'>
       <div className="process-form">
      <h4 className='process-'>Ready Transform Your Corporate Environment?</h4>
      <p>Fill out the scope request form below, and ourlead design consultant will reply</p>
    </div>

<form  className="contact-form" id='contact-form' onSubmit={handleSubmit(onSubmit)}>
<div className="form-container">
  <div className="input">
<input type="text" placeholder='Enter Your Full Name' {...register("name", {required: "Name is Required!"})}/>
{errors.name && <p>{errors.name.message}</p>}
</div>

<div className="input">
  <input type="email" placeholder='Enter Email' {...register("email", {required: "Email is Required!"})} />
  {errors.email && <p>{errors.email.message}</p>}
</div>

<div className="input">
  <input type="text" placeholder='Enter Your Company Name' {...register("name", {required: "Company name is required!"})}/>
  {errors.name && <p>{errors.name.message}</p>}
</div>
<div className="textarea">
  <textarea name="name" id="text" rows={10} cols={55} placeholder='Enter your message' {...register("text", {required: "text is Required!"})}></textarea>
  {errors.text && <p>{errors.text.message}</p>}
</div>
<button type='submit'>Submit</button>
</div>
     </form>
     </div>
     {/* process-form ending */}
    </div>
   </div>
    </>
  )
}

export default Navbar;