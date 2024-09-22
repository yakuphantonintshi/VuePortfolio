<template>
    <div class="container-fluid">
      <div class="row">
             <h1 class="projects">Projects</h1>
              <div class="row gap-1 justify-content-center" v-if="projects?.length" wrapper>
              <Card v-for="product in projects" :key="product.id" id="card">
                  <template #cardHeader>
                        <h2>{{ product.projectName }}</h2>
                        <img :src="product.image" :alt="product.projectName" loading="lazy" class="img-fluid">
                  </template>
                  <template #cardBody>
                      <h5 class="card-title">{{ product.description }}</h5>
                      <a :href="product.github" class="btn btn-dark" target="_blank"><i class="bi bi-github"></i></a>
                      <a :href="product.vercel" class="btn btn-dark" target="_blank">Vercel</a>
                     
                  </template>
              </Card>
          </div>
          <div v-else class="d-flex justify-content-center">
              <div class="spinner-border" role="status">
              </div>
          </div>
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
          projects() {
              return this.$store.state.projects
          }
      },
      mounted() {
          this.$store.dispatch('fetchProjects')
      },
     
  }
  </script>

  <style scoped>
  h2{
    height: 80px;
  }
  .card{
    width: 300px;
    height: 500px;
  }
  .container-fluid{
    background-color: #002231;
    margin-top: 3rem;
  }
  img{
    width: 150px;
    height: 150px;
     object-fit: contain;
    object-position: center;
  }
  h1{
    color: #51c4df;
}
.projects{
    color: white;
    text-shadow: 4px 4px 6px #51c4df;
    font-size: 3rem;
    text-decoration: underline;
    padding-bottom: 2rem;
    display: grid;
    grid-template-rows: repeat (3, 1fr );
}
a{
    /* background-image: linear-gradient(to right, #002231, #51c4df); */
    background-color: transparent;
    color: #51c4df;
    width: 90px;
    font-size: 1rem;
    transition: width 2s;
    margin-block: 7px;
    margin-inline: .8rem;
}
a:hover{
    color: white;
    /* width: 150px; */
    border: 1px solid #51c4df;
    background-color: #51c4df;
}
#card{
    margin: 50px;
    background-color: transparent;
    border: 1px solid #51c4df
}
h2{
    
    color: white;
    text-shadow: 4px 4px 6px #51c4df;
    font-size: 2rem;
    text-decoration: underline;
    padding-bottom: 2rem; 

}
.card-title{
    color: white;
    font-size: .9rem;
    margin-bottom: 2rem;
    height: 100px;
}
.card{
    display: grid;
    grid-template-rows: repeat (3, 1fr);
}
.btn{
    margin-block: 5px;
    border: .8px solid #51c4df;
}
@media screen and (max-width: 500px) {
.btn{
width: 150px;
height: 30px;
}
.img-fluid{
    width: 200px;
    /* margin-bottom: 50px; */
    margin-top: -70px;
}
.card-title{
    margin-top: -60px;
    font-size:smaller;

}
a{
    font-size: 1.2rem;
    padding-block: 2rem;
}
}

  </style>