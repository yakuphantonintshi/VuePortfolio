<template>
<nav class="navbar navbar-expand-lg sticky-top">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">
        <img src="https://yakuphantonintshi.github.io/myimages/Images/logo.jpg" alt="logo" class="img-fluid" loading="lazy">
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" id="navBar" aria-current="page" href="#landing">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  id="navBar" href="#about">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navBar" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Resume
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" id="navBar" href="#education">Education</a></li>
            <li><a class="dropdown-item" id="navBar" href="#resume">Skills</a></li>
          </ul>
        </li>


        <li class="nav-item">
          <a class="nav-link"  id="navBar" href="#project">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  id="navBar" href="#testimonials">Testimonials</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  id="navBar" href="#reachMe">Reach Me</a>
        </li>
        </ul>
    </div>
  </div>
</nav>
</template>
<style scoped>
  .navbar-toggler{
    background-color: #51c4df !important;
  }
  .dropdown-menu{
    background-color: #002231;
  }
</style>

