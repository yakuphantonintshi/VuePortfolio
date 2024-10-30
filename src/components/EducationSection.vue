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
        <h1 class="education">Experience</h1>
       <h4>Volunteering Experiene:</h4>
       <p class="experience">Peer Supporter in High School where I was giving my peers emotional and mental support, try to get them to open up as it is hard to talk to an adult, with the guidance of a professional practitioner.</p>
       <h4 class="technical">Technical Experience:</h4>
       <p>Intern at Life Choices Studio</p>
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
        <img src="https://yakuphantonintshi.github.io/myimages/Images/cert4.png" alt="pic1">
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

.certificates {
  display: flex; 
  animation: scroll 30s linear infinite;
  gap: 3rem;
}

@keyframes scroll {
  0% {
    transform: translateX(100%); 
  }
  100% {
    transform: translateX(-100%);
  }
}
.certificate img {
  width: 15rem;
  height: 12rem; 
}
.certificate:hover {
  transform: scale(1.4); 
}
.certificates:hover {
  animation-play-state: paused;
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
