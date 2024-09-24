<template>
  <div class="min-vh-100">

    <h1>Contact me</h1>
   <div class="container">
     <form action="https://formspree.io/f/xanwgnnq"
     method="POST" @submit.prevent="validateForm">
       <div class="row">
         <div class="col">
           <input type="text" placeholder="Name" v-model="form.name" class="name" />
           <span v-if="errors.name" class="error">{{ errors.name }}</span>
         </div>
         <div class="col">
           <input type="text" placeholder="Surname" v-model="form.surname" class="surname" />
           <span v-if="errors.surname" class="error">{{ errors.surname }}</span>
         </div>
       </div>
       
       <div class="row ">
         <div class="col">
           <input type="text" placeholder="Phone number" v-model="form.number" class="number" />
           <span v-if="errors.number" class="error">{{ errors.number }}</span>
         </div>
         <div class="col">
           <input type="text" placeholder="Email address" v-model="form.email" class="email" /> <br>
           <span v-if="errors.email" class="error">{{ errors.email }}</span>
         </div>
       </div>
       
       <br />
       <input type="text" v-model="form.message" class="message" placeholder="Message" />
       <span v-if="errors.message" class="error">{{ errors.message }}</span>
       
       <br />
       <button type="submit" class="submit">Submit</button>
     </form>
 
     <div v-if="submitted" class="check-icon">
       <i class="bi bi-check-circle"></i>
     </div>
 
     <div class="col" id="contact">
       <h2>Contact Info</h2>
       <p id="email"><i class="bi bi-envelope"></i><br> yakupha58756@gmail.com</p>
       <p id="phone"><i class="bi bi-telephone"></i><br> +27 62 507 0288</p>
       <a href="https://github.com/yakuphantonintshi" target="_blank"><i class="bi bi-github"></i></a>
       <a href="https://www.linkedin.com/in/yakupha-ntonintshi-3b2672221/" target="_blank"><i class="bi bi-linkedin"></i></a>
       <p id="address"><i class="bi bi-geo-alt"></i><br> Khayelitsha 7784 Cape Town Western Cape</p>
     </div>
   </div>
  </div>
</template>

<script>
export default {
  name: "ReacmeSection",
  data() {
    return {
      form: {
        name: '',
        surname: '',
        number: '',
        email: '',
        message: ''
      },
      errors: {},
      submitted: false
    };
  },
  methods: {
    validateForm() {
      this.errors = {};
      
      // validating the name
      if (!this.form.name) {
        this.errors.name = 'Name is required.';
      }

      // validating the surname
      if (!this.form.surname) {
        this.errors.surname = 'Surname is required.';
      }

      // validating phone number
      const phoneRegex = /^[0-9]{10,15}$/;
      if (!this.form.number) {
        this.errors.number = 'Phone number is required.';
      } else if (!phoneRegex.test(this.form.number)) {
        this.errors.number = 'Phone number must be valid.';
      }

      // validating email
      const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if (!this.form.email) {
        this.errors.email = 'Email address is required.';
      } else if (!emailRegex.test(this.form.email)) {
        this.errors.email = 'Email must be valid.';
      }

      // validating email
      if (!this.form.message) {
        this.errors.message = 'Message is required.';
      }

      if (Object.keys(this.errors).length === 0) {
        this.submitted = true;
        setTimeout(() => {
          this.submitted = false;
        }, 2000);
      }
    }
  }
};
</script>





<style scoped>
#contact{
  width: 380px;
  height: 400px;
  margin-bottom: 3rem
}
 
  .error {
  color: #51c4df;
  font-size: 1rem;
}

.check-icon {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 10rem;
  width: 300px;
  height: 300px;
  color: #51c4df;
  background-color: #002231;
}
  
  h1{
    color: white;
    text-shadow: 4px 4px 6px #51c4df;
    font-size: 3.5rem;
    text-decoration: underline;
    padding-top: 2rem;

  }
  input{
    width: 300px;
    height: 50px;
    display: grid;
    gap: 3rem;
    background-color: transparent;
    border: 2px solid white;
    border-radius: 5px;
    font-size: 1.5rem;
    color: #51c4df
  }
  button{
    background-image: linear-gradient(to right, #51c4df, #002231, #51c4df);
    color: #51c4df;
    width: 250px;
    height: 3.8rem;
    font-size: 1.5rem;
    transition: width 2s;
    margin-top: 2rem;
  }
  button:hover{
    color: white;
    width: 150px;
}
.message{
  width: 630px;
  height: 11rem;
}
.container{
  display: flex;
  align-items: center;
}
h4{
  color: white;
    text-shadow: 4px 4px 6px #51c4df;
    font-size: 2rem;
    padding-bottom: 2rem; 

}
h2{
  color: white;
    text-shadow: 4px 4px 6px #51c4df;
    font-size: 2rem;
    padding-bottom: 2rem; 
}
#contact{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 3rem;
  font-size: 1.7rem;
  padding-left: 3.5rem;
  border-bottom: 1px solid #51c4df;
  border-right: 1px solid #51c4df;
  box-shadow: 4px 4px 6px #51c4df;
      background-repeat: no-repeat;
      background-size: 100% 100%;
}
p{
  color: #51c4df;
  font-size: 1.2rem;
}

.row{
  padding-top: 4rem;
}
@media screen and (max-width: 895px) {
  .container{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  
}
@media screen and (max-width: 1000px){
  .row{
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
  }
  .message{
    width: 70%;
  }
  #contact{
     margin-top: 40px;
    width: 300px;
    height: 420px;
  }
  p{
    font-size: 15px;
  }
}
@media screen and (max-width: 400px) {
  .container{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  input{
    width: 250px;
  }
  
}
form{
  margin-right: 100px;
}
#email:hover{
  color: white;
}
#phone:hover{
  color: white;
}
#linked:hover{
  color: white;
}
#address:hover{
  color: white;
}
@media screen and (max-width: 353px) {
  #contact{
    width: 200px;
    margin-right: 80px;
  }
}


</style>