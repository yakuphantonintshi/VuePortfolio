<template>
  <div class="container">
    <div class="row">
           <h1 class="education">Education</h1>
            <div class="row gap-1 justify-content-center" v-if="education?.length">
            <Card v-for="product in education" :key="product.id" id="card">
                <template #cardHeader>
                    <img :src="product.imageURL" :alt="product.degree" loading="lazy" class="img-fluid">
                </template>
                <template #cardBody>
                    <h5 class="card-title">{{ product.school }}
                    </h5>
                    <p class="shadow"  id="lead">{{ product.degree }}</p>
                    <p> {{ product.graduation_year }}</p>
                    <!-- <p> <i class="bi bi-geo-alt"></i>: {{ product.location }}</p> -->
                    <a :href="product.certificate" class="btn btn-dark" target="_blank"><i class="bi bi-download"></i> Certificate</a>
                </template>
            </Card>
        </div>
        <div v-else class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
            </div>
        </div>
    </div>
    <!-- <div class="intern">
           <h1 class="education">Experience</h1>
          <h4>Volunteering Experiene:</h4>
          <p class="experience">Peer Supporter in High School where I was giving my peers emotional and mental support, try to get them to open up as it is hard to talk to an adult, with the guidance of a professional practitioner.</p>
          <h4 class="technical">Technical Experience:</h4>

           <p>Web Developer Intern at Life Choices Studio</p>
           <img src="https://lcstudio.co.za/wp-content/uploads/2023/09/logo-e1694516836643.png" class="studio" alt="">
       </div> -->
       <h1 class="education">Experience</h1>
<div class="grid-container">
    <div class="grid-item title-tech"><h4>Technical Experience</h4></div>
    <div class="grid-item title-vol"><h4>Volunteering Experience</h4></div>

    <div class="grid-item role-tech">Web Development Intern</div>
    <div class="grid-item role-vol">Peer Supporter</div>

    <div class="grid-item img-tech">
        <img src="https://lcstudio.co.za/wp-content/uploads/2023/09/logo-e1694516836643.png" id="pic" alt="">
    </div>
    <div class="grid-item img-vol">
        <img src="https://yakuphantonintshi.github.io/myimages/Images/peer_support-removebg-preview.png" id="pic" alt="">
    </div>
</div>



       <!-- <div>
        <h1 class="education">Experience</h1>
        <table>
            <tr>
                <th>Volunteering Experiene</th>
                <th>Technical Experience</th>
            </tr>
            <tr>
                <td class="experience">Peer Supporter in High School where I was giving my peers emotional and mental support, try to get them to open up as it is hard to talk to an adult, with the guidance of a professional practitioner.</td>
                <td>Intern at Life Choices Studio</td>
            </tr>
        </table>
       </div> -->
  </div>
  <h3 class="mycertificate">My Certificates</h3>
  <div class="certificate-container">
  <div class="certificates">
    <div class="certificate">
      <img src="https://yakuphantonintshi.github.io/myimages/Images/cert1.png" alt="">
    </div>
    <div class="certificate">
      <img src="https://yakuphantonintshi.github.io/myimages/Images/cert2.png" alt="">
    </div>
    <div class="certificate">
      <img src="https://yakuphantonintshi.github.io/myimages/Images/cert3.png" alt="">
    </div>
    <div class="certificate">
      <img src="https://yakuphantonintshi.github.io/myimages/Images/cert4.png" alt="">
    </div>
    <div class="certificate">
      <img src="https://yakuphantonintshi.github.io/myimages/Images/cert5.png" alt="">
    </div>
    <div class="certificate">
      <img src="https://yakuphantonintshi.github.io/myimages/Images/cert6.png" alt="">
    </div>
    <div class="certificate">
      <img src="https://yakuphantonintshi.github.io/myimages/Images/cert7.png" alt="">
    </div>
    <div class="certificate">
      <img src="https://yakuphantonintshi.github.io/myimages/Images/cert8.png" alt="">
    </div>
    <div class="certificate">
      <img src="https://yakuphantonintshi.github.io/myimages/Images/cert9.png" alt="">
    </div>
    <div class="certificate">
      <img src="https://yakuphantonintshi.github.io/myimages/Images/cert10.png" alt="">
    </div>
    <div class="certificate">
      <img src="https://yakuphantonintshi.github.io/myimages/Images/cert11.png" alt="">
    </div>
    <div class="certificate">
      <img src="https://yakuphantonintshi.github.io/myimages/Images/cert12.png" alt="">
    </div>
    <div class="certificate">
      <img src="https://yakuphantonintshi.github.io/myimages/Images/cert13.png" alt="">
    </div>
    <div class="certificate">
      <img src="https://yakuphantonintshi.github.io/myimages/Images/cert14.png" alt="">
    </div>
    <div class="certificate">
      <img src="https://yakuphantonintshi.github.io/myimages/Images/cert15.png" alt="">
    </div>
  </div>
  <!-- Duplicate the certificates list to create a seamless effect -->
</div>
</template>

<script>
import Card from '@/components/Card.vue';
export default {
    components: {
        Card
    },
    computed: {
        education() {
            return this.$store.state.education
        }
    },
    mounted() {
        this.$store.dispatch('fetchEducation')
    },
}
</script>

<style scoped>
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr; /* 2 columns */
    grid-template-rows: auto auto auto; /* 3 rows */
    gap: 20px; /* Space between grid items */
    width: 90%;
    max-width: 600px;
    margin: auto;
    padding: 20px;
    grid-template-areas: 
        "title-tech title-vol"
        "role-tech role-vol"
        "img-tech img-vol";
    
}

.grid-item {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 20px;
    font-size: 16px;
    border-radius: 8px;
    height: auto;
    text-align: center;
    width: 300px;
}

/* Assign grid areas */
.title-tech { grid-area: title-tech; }
.title-vol { grid-area: title-vol; }
.role-tech { grid-area: role-tech; }
.role-vol { grid-area: role-vol; }
.img-tech { grid-area: img-tech; }
.img-vol { grid-area: img-vol; }

/* Ensure images resize properly */
.grid-item img {
    max-width: 100%;
    height: auto;
}

/* Responsive Design for Smaller Screens (Below 600px) */
@media screen and (max-width: 600px) {
    .grid-container {
        grid-template-columns: 1fr; /* Change to 1 column */
        grid-template-areas:
            "title-tech"
            "role-tech"
            "img-tech"
            "title-vol"
            "role-vol"
            "img-vol";
        gap: 15px;
    }
    
    .grid-item {
        padding: 15px;
        font-size: 14px;
    }
}
.grid-item img{
    object-fit: contain;
}
.certificate-container {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  /* background: #fff; */
}

/* Certificates Wrapper */
.certificates {
  display: flex;
  gap: 50px;
  animation: scrollCertificates 20s linear infinite;
}

/* Certificate Styling */
.certificate img {
  width: 280px;
  height: auto;
  object-fit: contain;
  transition: transform 0.9s ease-in-out;
  display: block;
}

/* Smooth hover effect */
.certificate:hover img {
  transform: scale(1.2);
  /* animation-play-state: paused; */
}

/* Scrolling Animation */
@keyframes scrollCertificates {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

table{
    border-collapse: collapse;
}
table th,
table td {
  border: 1px solid white;
  padding: 15px; 
  text-align: center;
  color: white;
}
table th {
  background-color: #328395;
  width: 700px;
}
.technical{
    margin-block-start: 2rem;
}
table{
   margin-left: 15rem;
   width: 800px;
   margin-top: 3rem;
}
.card-title{
    height: 50px;
}
p{
    margin-block: 1.5rem;
}
#lead{
    text-decoration: underline;
}
:is(h5, h4, p){
    color: white;
}
h4{
    text-decoration: underline;
    color: #51C4DF
}
.mycertificate{
    color: white;
    text-shadow: 4px 4px 6px #51C4DF;
    /* font-size: 3.5rem; */
    text-decoration: underline;
    padding-bottom: 2rem;
}
.education{
    color: white;
    text-shadow: 4px 4px 6px #51C4DF;
    font-size: 3.5rem;
    text-decoration: underline;
    padding-bottom: 2rem;
}
.container{
    background-color:#002231;
    margin-top: 5.5rem;
}
a{
    background-image: linear-gradient(to right, #002231, #51C4DF);
    color: white;
    font-size: 1rem;
    transition: width 2s;
    margin-top: 1.2rem;
}

img{
    padding-top: 1rem;
    width: 200px;
    height: 200px;
}
.shadow{
    text-shadow: 4px 4px 6px #51C4DF;
    font-size: 1.3rem;
    text-decoration: underline;
}
#card{
    background-color: transparent;
   margin-inline: 50px;
   width: 300px;
}
#card:hover{
    border: .8px solid #51C4DF;
}
@media screen and (max-width: 600px) {
  #app{
    display: block;
   }
}
@media screen and (max-width: 400px) {
  #card{
    width: 300px;
    margin-left: 80px;
   }
   .btn{
    width: 200px;
   }
   .img-fluid{
    width: 700px;
    height: 300px;
    object-fit: contain;
   }
}
/* @media screen and (max-width: 990px){
    table{
        margin-right: 30rem;
    }
} */

</style>
